import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { FC, ReactNode, createContext, useEffect, useReducer } from 'react';
import { User } from 'src/models/user';
import { IUser, authenticateUser } from 'src/services/userServices';
import axios from 'src/utils/axios';
import { JWT_SECRET, verify } from 'src/utils/jwt';
import storageUtil, { storageKeys } from 'src/utils/storage';

interface AuthState {
  isInitialized: boolean;
  isAuthenticated: boolean;
  user: IUser | null;
}

interface AuthContextValue extends AuthState {
  method: 'JWT';
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, name: string, password: string) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

type InitializeAction = {
  type: 'INITIALIZE';
  payload: {
    isAuthenticated: boolean;
    user: IUser | null;
  };
};

type LoginAction = {
  type: 'LOGIN';
  payload: {
    user: IUser;
  };
};

type LogoutAction = {
  type: 'LOGOUT';
};

type RegisterAction = {
  type: 'REGISTER';
  payload: {
    user: User;
  };
};

type Action = InitializeAction | LoginAction | LogoutAction | RegisterAction;

const initialAuthState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
};

const setSession = (accessToken: IUser | null): void => {
  if (accessToken) {
    storageUtil.set(storageKeys.accessToken.name, accessToken, localStorage);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    storageUtil.remove(storageKeys.accessToken.name, localStorage);
    delete axios.defaults.headers.common.Authorization;
  }
};

const handlers: Record<
  string,
  (state: AuthState, action: Action) => AuthState
> = {
  INITIALIZE: (state: AuthState, action: InitializeAction): AuthState => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user
    };
  },
  LOGIN: (state: AuthState, action: LoginAction): AuthState => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user
    };
  },
  LOGOUT: (state: AuthState): AuthState => ({
    ...state,
    isAuthenticated: false,
    user: null
  }),
  REGISTER: (state: AuthState, action: RegisterAction): AuthState => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user: null
    };
  }
};

const reducer = (state: AuthState, action: Action): AuthState =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

const AuthContext = createContext<AuthContextValue>({
  ...initialAuthState,
  method: 'JWT',
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve()
});

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialAuthState);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const initialize = async (): Promise<void> => {
      try {
        const accessToken = JSON.parse(
          storageUtil.get(storageKeys.accessToken.name, localStorage)
        ) as IUser;

        if (accessToken && verify(accessToken, JWT_SECRET)) {
          setSession(accessToken);

          // const response = await axios.get<{ user: User }>(
          //   '/api/account/personal'
          // );
          // const { user } = response.data;
          const user = accessToken;

          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: true,
              user
            }
          });
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              user: null
            }
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null
          }
        });
      }
    };

    initialize();
  }, []);

  const login = async (userName: string, password: string): Promise<void> => {
    const response = await authenticateUser({
      asUserName: userName,
      asPassword: password,
      asSchoolId: JSON.parse(storageUtil.get(storageKeys.selectedSchool.name))
        ?.SchoolId,
      asIsSiblingLogin: false
    });

    const user = response.data;

    if (user) {
      user.AuthenticateUserResult.PhotoFilePath =
        user.AuthenticateUserResult.PhotoFilePath?.length != 0
          ? 'data:image/png;base64,' + user.AuthenticateUserResult.PhotoFilePath
          : '';

      setSession(user);
      dispatch({
        type: 'LOGIN',
        payload: {
          user
        }
      });
    } else {
      enqueueSnackbar('Invalid username or password', {
        variant: 'error'
      });
      setSession(null);
      dispatch({
        type: 'LOGOUT'
      });
    }
  };

  const logout = async (): Promise<void> => {
    setSession(null);
    dispatch({ type: 'LOGOUT' });
  };

  const register = async (
    email: string,
    name: string,
    password: string
  ): Promise<void> => {
    const response = await axios.post<{ accessToken: string; user: User }>(
      '/api/account/register',
      {
        email,
        name,
        password
      }
    );
    const { accessToken, user } = response.data;

    storageUtil.set(storageKeys.accessToken.name, accessToken, localStorage);
    dispatch({
      type: 'REGISTER',
      payload: {
        user
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'JWT',
        login,
        logout,
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthContext;
