import { Box } from '@mui/material';
import HeaderNotifications from './Notifications';
import HeaderSupport from './Support';

function HeaderButtons() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <HeaderSupport />
      <HeaderNotifications />
    </Box>
  );
}

export default HeaderButtons;
