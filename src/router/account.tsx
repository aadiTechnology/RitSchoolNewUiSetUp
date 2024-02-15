import { Suspense, lazy } from 'react';

import Guest from 'src/components/Guest';
import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Account

const LoginCover = Loader(
  lazy(() => import('src/content/pages/Auth/Login/Cover'))
);

const RegisterCover = Loader(
  lazy(() => import('src/content/pages/Auth/Register/Cover'))
);

const RecoverPassword = Loader(
  lazy(() => import('src/content/pages/Auth/RecoverPassword'))
);

const accountRoutes = [
  {
    path: 'login',
    element: (
      <Guest>
        <LoginCover />
      </Guest>
    )
  },
  {
    path: 'register',
    element: (
      <Guest>
        <RegisterCover />
      </Guest>
    )
  },
  {
    path: 'login-cover',
    element: <LoginCover />
  },
  {
    path: 'recover-password',
    element: <RecoverPassword />
  },
  {
    path: 'register',
    element: (
      <Guest>
        <RegisterCover />
      </Guest>
    )
  },
  {
    path: 'register-cover',
    element: <RegisterCover />
  }
];

export default accountRoutes;
