import { Box, Card, Container, Link, Typography, styled } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import useAuth from 'src/hooks/useAuth';
import RiteLogo from '../../../../../assets/images/ritelogo.jpg';
import JWTLogin from '../LoginJWT';

const icons = {
  Auth0: '/static/images/logo/auth0.svg',
  FirebaseAuth: '/static/images/logo/firebase.svg',
  JWT: '/static/images/logo/jwt.svg',
  Amplify: '/static/images/logo/amplify.svg'
};

const Content = styled(Box)(
  () => `
    display: flex;
    flex: 1;
    width: 100%;
`
);

const MainContent = styled(Box)(
  ({ theme }) => `
  @media (min-width: ${theme.breakpoints.values.md}px) {
    padding: 0 0 0 440px;
  }
  width: 100%;
  display: flex;
  align-items: center;
`
);

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    background: ${theme.colors.alpha.white[100]};
    width: 440px;
`
);

const SidebarContent = styled(Box)(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing(6)};
`
);

const CardImg = styled(Card)(
  ({ theme }) => `
    border-radius: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 1px solid ${theme.colors.alpha.black[10]};
    transition: ${theme.transitions.create(['border'])};
    position: absolute;

    &:hover {
      border-color: ${theme.colors.primary.main};
    }
`
);

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(33)};
`
);

function LoginCover() {
  const { method } = useAuth() as any;
  const { t }: { t: any } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Login - Cover</title>
      </Helmet>
      <Content>
        <Container
          sx={{
            mt: 2,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
          }}
          maxWidth="sm"
        >
          <Card
            sx={{
              md: {
                p: 4
              },
              p: 2,
              my: 4
            }}
          >
            <Box textAlign="center">
              <Typography
                variant="h2"
                sx={{
                  mb: 1
                }}
              >
                {t('Sign in')}
              </Typography>
              <Typography
                variant="h4"
                color="text.secondary"
                fontWeight="normal"
                sx={{
                  mb: 3
                }}
              >
                {t('Fill in the fields below to sign into your account.')}
              </Typography>
            </Box>
            {method === 'JWT' && <JWTLogin />}
            <Box
              sx={{
                mt: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%'
              }}
            >
              <Link component={RouterLink} to="/account/login">
                <b>{t('Privacy Policy')}</b>
              </Link>
            </Box>
            <Box
              sx={{
                mt: 1,
                display: 'flex',
                alignItems: 'center',
                jusitfyContent: 'center',
                flexDirection: 'column',
                gap: 1
              }}
            >
              <img
                src={RiteLogo}
                alt=""
                style={{
                  width: '250px',
                  height: '60px',
                  objectFit: 'cover'
                }}
              />
              <Typography fontSize={12} sx={{ pb: '8px' }}>
                Copyright © {new Date().getFullYear()} RiteSchool All rights
                reserved.
              </Typography>
            </Box>
          </Card>
        </Container>
      </Content>
    </>
  );
}

export default LoginCover;
