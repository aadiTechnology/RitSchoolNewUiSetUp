import { Box, styled, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import RiteLogo from '../../assets/images/ritelogo.jpg';

function Logo() {
  const { t }: { t: any } = useTranslation();

  return (
    <Box>
      <img src={RiteLogo} style={{ width: '100%' }} />
    </Box>
  );
}

export default Logo;
