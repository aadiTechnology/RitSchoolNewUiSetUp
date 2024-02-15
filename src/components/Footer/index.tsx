import { Box, Card, Typography, styled } from '@mui/material';
import RiteLogo from '../../assets/images/ritelogo.jpg';

const FooterWrapper = styled(Card)(
  ({ theme }) => `
        border-radius: 0;
        margin-top: ${theme.spacing(4)};
        backgroundColor: white;
`
);

type Props = {
  ref?: React.RefObject<HTMLDivElement>;
};

function Footer({ ref }: Props) {
  return (
    <FooterWrapper className="footer-wrapper">
      <Box
        display={{ xs: 'block', md: 'flex' }}
        alignItems="center"
        textAlign={{ xs: 'center', md: 'left' }}
        justifyContent="space-between"
      >
        <Typography variant="subtitle1">
          <img
            src={RiteLogo}
            alt=""
            style={{ width: 200, objectFit: 'cover', height: 50 }}
          />
        </Typography>
        <Box>
          <Typography variant="subtitle1">
            Copyright &copy; 2024 - RiteSchool, All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </FooterWrapper>
  );
}

export default Footer;
