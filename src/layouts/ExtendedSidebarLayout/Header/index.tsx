import { useContext } from 'react';

import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import {
  Box,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  styled,
  useTheme
} from '@mui/material';
import { SidebarContext } from 'src/contexts/SidebarContext';

import { ISchool } from 'src/services/schoolServices';
import { prepareLogoUrl } from 'src/utils/common';
import storageUtil, { storageKeys } from 'src/utils/storage';
import HeaderButtons from './Buttons';
import HeaderUserbox from './Userbox';

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 6;
        background-color: ${theme.header.background};
        backdrop-filter: blur(3px);
        position: fixed;
        justify-content: space-between;
        width: 100%;
`
);

function Header() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const selectedSchool = JSON.parse(
    storageUtil.get(storageKeys.selectedSchool.name)
  ) as ISchool;
  const theme = useTheme();

  return (
    <HeaderWrapper display="flex" alignItems="center">
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        alignItems="center"
        spacing={2}
      >
        <Box component="span">
          <Tooltip arrow title="Toggle Menu">
            <IconButton color="primary" onClick={toggleSidebar}>
              {!sidebarToggle ? (
                <MenuTwoToneIcon fontSize="small" />
              ) : (
                <CloseTwoToneIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Box>
        {/* Currently logged in school name */}
        {selectedSchool && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <img
              src={prepareLogoUrl(selectedSchool?.TermsSchoolName)}
              style={{
                width: '100px',
                height: `${theme.header.height}`,
                objectFit: 'contain'
              }}
              alt=""
            />
            <Typography
              sx={{
                display: {
                  md: 'flex',
                  xs: 'none'
                }
              }}
              variant={'h4'}
              color={'primary'}
            >
              {selectedSchool?.SchoolName}
            </Typography>
          </Box>
        )}
        {/* <HeaderSearch /> */}
        {/* <HeaderMenu /> */}
      </Stack>
      <Box display="flex" alignItems="center">
        <HeaderButtons />
        <HeaderUserbox />
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
