import { useFormik } from 'formik';
import { useEffect, useState, type FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup';

import {
  SchoolTwoTone,
  VisibilityOffTwoTone,
  VisibilityTwoTone
} from '@mui/icons-material';
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useGetAllSchoolsService } from 'src/hooks/service-hooks/useGetAllSchoolsService';
import { useGetSchoolSettingsService } from 'src/hooks/service-hooks/useGetSchoolSettingsService';
import useAuth from 'src/hooks/useAuth';
import useRefMounted from 'src/hooks/useRefMounted';
import { ISchool } from 'src/services/schoolServices';
import { prepareLogoUrl } from 'src/utils/common';
import storageUtil, { storageKeys } from 'src/utils/storage';

const LoginJWT: FC = () => {
  const { login } = useAuth() as any;
  const isMountedRef = useRefMounted();
  const { t }: { t: any } = useTranslation();
  const [selectedSchool, setSelectedSchool] = useState<ISchool>({
    FolderName: '',
    SchoolId: '',
    SchoolName: '',
    OrgName: '',
    SiteURL: '',
    SmsSenderName: '',
    TermsSchoolName: ''
  });
  const { schools, isLoading, isError } = useGetAllSchoolsService();
  const { schoolSettings } = useGetSchoolSettingsService(
    selectedSchool.SchoolId,
    {
      skip: !selectedSchool.SchoolId,
      refetchOnArgsChange: true
    }
  );
  const [viewPassword, setViewPassword] = useState(false);
  const loginJWTForm = useFormik({
    initialValues: {
      schoolName: '',
      email: '',
      password: '',
      submit: null
    },
    validationSchema: Yup.object().shape({
      schoolName: Yup.string().required(t('The school name is required')),
      email: Yup.string()
        // .email(t('The email provided should be a valid email address'))
        .max(255)
        .required(t('The email field is required')),
      password: Yup.string()
        .max(255)
        .required(t('The password field is required'))
    }),
    onSubmit: async (
      values,
      { setErrors, setStatus, setSubmitting }
    ): Promise<void> => {
      try {
        await login(loginJWTForm.values.email, loginJWTForm.values.password);

        if (isMountedRef.current) {
          setStatus({ success: true });
          setSubmitting(false);
        }
      } catch (err) {
        console.error(err);
        if (isMountedRef.current) {
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }
    }
  });

  const handlePasswordVisibility = () => {
    setViewPassword((prev) => !prev);
  };

  /**
   * This effect is responsible for setting the school settings to local storage,
   * and if the selected school is set, it will reset the selectedSchool state
   */
  useEffect(() => {
    if (storageUtil.get(storageKeys.selectedSchool.name)) {
      const selectedSchoolDetails = JSON.parse(
        storageUtil.get(storageKeys.selectedSchool.name)
      );
      if (isMountedRef.current) {
        setSelectedSchool(selectedSchoolDetails);
        loginJWTForm.setFieldValue(
          'schoolName',
          selectedSchoolDetails.SchoolName
        );
      }
    }
  }, [storageUtil.get(storageKeys.selectedSchool.name)]);

  /**
   * This effect is responsible for setting the school settings to the redux store
   */
  useEffect(() => {
    if (schoolSettings) {
      storageUtil.set(storageKeys.selectedSchoolSettings.name, schoolSettings);
    }
  }, [schoolSettings]);

  return (
    <form noValidate onSubmit={loginJWTForm.handleSubmit}>
      {selectedSchool.SchoolName && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center',
            flexDirection: 'column',
            gap: 1,
            mb: 2
          }}
        >
          <img
            src={prepareLogoUrl(selectedSchool.TermsSchoolName)}
            alt={selectedSchool.SchoolName}
            width={'150px'}
          />
          <Typography variant={'h4'} textAlign={'center'}>
            {selectedSchool.SchoolName}
          </Typography>
        </Box>
      )}
      <Autocomplete
        freeSolo
        id="select-school"
        disableClearable
        options={schools}
        getOptionLabel={(option: ISchool) => option.SchoolName || ''}
        value={selectedSchool}
        onInputChange={(event, newInputValue) => {
          if (newInputValue) {
            loginJWTForm.setFieldValue('schoolName', newInputValue);
          }
        }}
        onChange={(event, newValue: ISchool) => {
          if (newValue) {
            setSelectedSchool(newValue);
            loginJWTForm.setFieldValue('schoolName', newValue.SchoolName);
            // Set the selected school to local storage
            storageUtil.set(storageKeys.selectedSchool.name, newValue);
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select School"
            error={Boolean(
              loginJWTForm.touched.schoolName && loginJWTForm.errors.schoolName
            )}
            helperText={
              loginJWTForm.touched.schoolName && loginJWTForm.errors.schoolName
            }
            fullWidth
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <>
                  {selectedSchool.TermsSchoolName ? (
                    <img
                      src={prepareLogoUrl(selectedSchool.TermsSchoolName)}
                      alt={'error'}
                      width={'20px'}
                      onError={(e) => {
                        selectedSchool.TermsSchoolName = '';
                      }}
                    />
                  ) : (
                    <SchoolTwoTone color="inherit" fontSize="small" />
                  )}
                  {params.InputProps.startAdornment}
                </>
              ),
              endAdornment: (
                <>
                  {isLoading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              )
            }}
          />
        )}
      />
      <TextField
        error={Boolean(loginJWTForm.touched.email && loginJWTForm.errors.email)}
        fullWidth
        margin="normal"
        helperText={loginJWTForm.touched.email && loginJWTForm.errors.email}
        label={t('Email address')}
        name="email"
        onBlur={loginJWTForm.handleBlur}
        onChange={loginJWTForm.handleChange}
        type="email"
        value={loginJWTForm.values.email}
        variant="outlined"
      />
      <TextField
        error={Boolean(
          loginJWTForm.touched.password && loginJWTForm.errors.password
        )}
        fullWidth
        margin="normal"
        helperText={
          loginJWTForm.touched.password && loginJWTForm.errors.password
        }
        label={t('Password')}
        name="password"
        onBlur={loginJWTForm.handleBlur}
        onChange={loginJWTForm.handleChange}
        type={viewPassword ? 'text' : 'password'}
        value={loginJWTForm.values.password}
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handlePasswordVisibility}>
                {viewPassword ? (
                  <VisibilityTwoTone />
                ) : (
                  <VisibilityOffTwoTone />
                )}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <Box alignItems="center" display="flex" justifyContent="space-between">
        <Link component={RouterLink} to="/account/login">
          <b>{t('School Notices')}</b>
        </Link>
        <Link component={RouterLink} to="/account/recover-password">
          <b>{t('Lost password?')}</b>
        </Link>
      </Box>

      <Button
        sx={{
          mt: 3
        }}
        color="primary"
        startIcon={
          loginJWTForm.isSubmitting ? <CircularProgress size="1rem" /> : null
        }
        disabled={loginJWTForm.isSubmitting}
        type="submit"
        fullWidth
        size="large"
        variant="contained"
      >
        {t('Sign in')}
      </Button>
    </form>
  );
};

export default LoginJWT;
