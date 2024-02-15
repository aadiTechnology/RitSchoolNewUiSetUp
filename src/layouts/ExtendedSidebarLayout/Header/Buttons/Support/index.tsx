import {
  BookTwoTone,
  FeedbackTwoTone,
  KeyboardArrowDownTwoTone,
  PhoneTwoTone,
  SchoolTwoTone,
  SupportTwoTone
} from '@mui/icons-material';
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Popover,
  Tooltip,
  alpha,
  styled,
  useTheme
} from '@mui/material';
import { useRef, useState } from 'react';

type Props = {};

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
  width: ${theme.spacing(4)};
  height: ${theme.spacing(4)};
  border-radius: ${theme.general.borderRadiusLg};
`
);

const HeaderSupport = (props: Props) => {
  const theme = useTheme();
  const [isOpen, setOpen] = useState<boolean>(false);
  const ref = useRef<any>(null);
  const [supportOptions, setSupportOptions] = useState([
    {
      name: 'User Guide',
      anchor: null,
      link: '',
      icon: BookTwoTone,
      options: []
    },
    {
      name: 'Knowledge Base',
      anchor: null,
      link: '',
      icon: SchoolTwoTone,
      options: []
    },
    {
      name: 'Feedback',
      anchor: null,
      link: '',
      icon: FeedbackTwoTone,
      options: []
    },
    {
      name: 'Contact Us',
      anchor: null,
      link: '',
      icon: PhoneTwoTone,
      options: []
    }
  ]);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip title={'Support'}>
        <IconButtonWrapper
          sx={{
            background: alpha(theme.colors.error.main, 0.1),
            transition: `${theme.transitions.create(['background'])}`,
            color: theme.colors.error.main,

            '&:hover': {
              background: alpha(theme.colors.error.main, 0.2)
            }
          }}
          color="error"
          ref={ref}
          onClick={handleOpen}
        >
          <SupportTwoTone fontSize="small" />
        </IconButtonWrapper>
      </Tooltip>
      <Popover
        disableScrollLock
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', p: 1, gap: 1 }}>
          {supportOptions.map((supportOption, key) => (
            <Box key={key}>
              <Button
                key={key}
                onClick={(e) => {
                  let supportOptionsCpy = [...supportOptions];
                  supportOptionsCpy[key].anchor = e.currentTarget;
                  setSupportOptions(supportOptionsCpy);
                }}
                sx={{
                  textAlign: 'start',
                  justifyContent: 'flex-start'
                }}
                startIcon={<supportOption.icon />}
                fullWidth
              >
                {supportOption.name}
                {supportOption?.options &&
                  supportOption?.options.length > 0 && (
                    <KeyboardArrowDownTwoTone />
                  )}
              </Button>
              {supportOption?.options && supportOption?.options.length > 0 && (
                <Menu
                  id={`${supportOption.name}-menu`}
                  anchorEl={supportOption.anchor}
                  open={Boolean(supportOption.anchor)}
                  onClose={() => {
                    supportOption.anchor = null;
                    setSupportOptions([...supportOptions]);
                  }}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button'
                  }}
                  sx={{
                    '& .MuiMenu-paper': {
                      padding: 0
                    }
                  }}
                >
                  {supportOption?.options.map((option, key) => (
                    <MenuItem key={key}>{option.name}</MenuItem>
                  ))}
                </Menu>
              )}
            </Box>
          ))}
        </Box>
      </Popover>
    </>
  );
};

export default HeaderSupport;
