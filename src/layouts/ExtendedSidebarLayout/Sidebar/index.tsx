import { useContext } from 'react';
import Scrollbar from 'src/components/Scrollbar';
import { SidebarContext } from 'src/contexts/SidebarContext';

import { Box, Divider, Drawer, styled, useTheme } from '@mui/material';

import { prepareLogoUrl } from 'src/utils/common';
import storageUtil, { storageKeys } from 'src/utils/storage';
import SidebarFooter from './SidebarFooter';
import SidebarMenu from './SidebarMenu';

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.colors.alpha.trueWhite[70]};
        position: relative;
        z-index: 7;
        height: 100%;
`
);

function Sidebar() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const theme = useTheme();
  const selectedSchool = JSON.parse(
    storageUtil.get(storageKeys.selectedSchool.name)
  );

  return (
    <>
      <Drawer
        sx={{
          boxShadow: `${theme.sidebar.boxShadow}`
        }}
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={sidebarToggle}
        onClose={closeSidebar}
        variant="temporary"
        elevation={9}
      >
        <SidebarWrapper
          sx={{
            background: 'white',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: 2
            }}
          >
            <img
              src={
                selectedSchool
                  ? prepareLogoUrl(selectedSchool?.TermsSchoolName)
                  : ''
              }
              alt=""
              style={{
                objectFit: 'contain',
                width: '100%',
                height: '120px'
              }}
            />
          </Box>
          <Divider />
          <Scrollbar>
            <SidebarMenu />
          </Scrollbar>
          <Divider />
          <SidebarFooter />
        </SidebarWrapper>
      </Drawer>
    </>
  );
}

export default Sidebar;
