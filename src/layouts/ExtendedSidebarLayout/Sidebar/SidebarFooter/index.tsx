import {
  AccountCircleTwoTone,
  PowerSettingsNewTwoTone,
  SettingsTwoTone
} from '@mui/icons-material';
import {
  Box,
  IconButton,
  Tooltip,
  TooltipProps,
  styled,
  tooltipClasses,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import useAuth from 'src/hooks/useAuth';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    boxShadow: theme.shadows[24],
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(12)
  }
}));

function SidebarFooter() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async (): Promise<void> => {
    try {
      await logout();
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box
      sx={{
        height: 60
      }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <LightTooltip placement="top" arrow title={t('Events Calendar')}>
        <IconButton
          color={'primary'}
          sx={{
            transition: `${theme.transitions.create(['all'])}`
          }}
          to="/dashboard/applications/calendar"
          component={RouterLink}
        >
          <AccountCircleTwoTone />
        </IconButton>
      </LightTooltip>
      <LightTooltip placement="top" arrow title={t('Messenger')}>
        <IconButton
          color={'primary'}
          to="/dashboard/applications/messenger"
          component={RouterLink}
          sx={{
            transition: `${theme.transitions.create(['all'])}`,
            mx: 1
          }}
        >
          <SettingsTwoTone />
        </IconButton>
      </LightTooltip>
      <LightTooltip placement="top" arrow title={t('Logout')}>
        <IconButton
          color={'primary'}
          sx={{
            transition: `${theme.transitions.create(['all'])}`
          }}
          onClick={handleLogout}
        >
          <PowerSettingsNewTwoTone />
        </IconButton>
      </LightTooltip>
    </Box>
  );
}

export default SidebarFooter;
