import { useContext, useState } from 'react';

import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Menu,
  MenuItem,
  Stack,
  styled,
  useTheme
} from '@mui/material';
import { SidebarContext } from 'src/contexts/SidebarContext';

import { KeyboardArrowDownTwoTone } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { ISchool } from 'src/services/schoolServices';
import storageUtil, { storageKeys } from 'src/utils/storage';

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
        height: ${theme.header.subHeaderHeight};
        border-top: 1px solid ${grey[200]};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 6;
        background-color: ${theme.header.background};
        position: fixed;
        top: ${theme.header.height};
        justify-content: space-between;
        width: 100%;
`
);

function SubHeader() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const selectedSchool = JSON.parse(
    storageUtil.get(storageKeys.selectedSchool.name)
  ) as ISchool;
  const [pages, setPages] = useState([
    {
      name: "Counsellor's Corner",
      anchor: null,
      options: [
        {
          name: 'Self Discipline',
          link: ''
        },
        {
          name: 'Social Media',
          link: ''
        },
        {
          name: 'Effective Study Skills',
          link: ''
        },
        {
          name: 'Bullying - Copy',
          link: ''
        },
        {
          name: 'Benefit of pets for human health',
          link: ''
        },
        {
          name: 'Angry Child Outbursts',
          link: ''
        },
        {
          name: 'AUTISM WORKSHOP',
          link: ''
        },
        {
          name: 'Rashmi Gupta',
          link: ''
        },
        {
          name: 'Remedial Teaching',
          link: ''
        },
        {
          name: 'Why having choices should be a choice for children?',
          link: ''
        },
        {
          name: 'learning  difficulty2',
          link: ''
        },
        {
          name: 'cyber Safety',
          link: ''
        },
        {
          name: 'Learning Difficulty',
          link: ''
        }
      ]
    },
    {
      name: 'PTA',
      anchor: null,
      options: []
    },
    {
      name: 'Pre-Primary Activities',
      anchor: null,
      options: []
    },
    {
      name: 'Syllabus',
      anchor: null,
      options: [
        {
          name: 'Standard I',
          link: ''
        },
        {
          name: 'Standard II',
          link: ''
        },
        {
          name: 'Standard III',
          link: ''
        },
        {
          name: 'Standard IV',
          link: ''
        },
        {
          name: 'Standard V',
          link: ''
        },
        {
          name: 'Standard VI',
          link: ''
        },
        {
          name: 'Standard VI',
          link: ''
        },
        {
          name: 'Standard VII',
          link: ''
        },
        {
          name: 'Standard IX',
          link: ''
        },
        {
          name: 'Standard IV',
          link: ''
        },
        {
          name: 'Standard X',
          link: ''
        },
        {
          name: 'Exam Paper Pattern',
          link: ''
        }
      ]
    },
    {
      name: 'Practice Worksheet',
      anchor: null,
      options: []
    },
    {
      name: 'School Club',
      anchor: null,
      options: []
    },
    {
      name: 'Mediclaim',
      anchor: null,
      options: []
    },
    {
      name: 'Eloquium e-Newsletter',
      anchor: null,
      options: []
    },
    {
      name: 'Question Bank',
      anchor: null,
      options: []
    }
  ]);

  return (
    <HeaderWrapper
      display="flex"
      alignItems="center"
      sx={{
        boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.1)'
      }}
    >
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        alignItems="center"
        spacing={2}
        sx={{
          overflowX: 'auto'
        }}
      >
        <List
          sx={{
            flexDirection: 'row',
            p: 0,
            m: 0,
            display: 'block',
            minWidth: 'fit-content'
          }}
        >
          <ListItem sx={{ p: 0 }}>
            {pages.map((page, key) => (
              <Box key={key}>
                <ListItemButton
                  dense
                  sx={{
                    color: (theme) => theme.palette.common.white,
                    '&:hover': {
                      color: (theme) => theme.palette.common.white,
                      background: (theme) => theme.palette.primary.main
                    },
                    px: 1,
                    whiteSpace: 'nowrap'
                  }}
                  key={key}
                  onClick={(e) => {
                    let pagesCpy = [...pages];
                    pagesCpy[key].anchor = e.currentTarget;
                    setPages(pagesCpy);
                  }}
                >
                  {page.name}
                  {page?.options && page?.options.length > 0 && (
                    <KeyboardArrowDownTwoTone />
                  )}
                </ListItemButton>
                {page?.options && page?.options.length > 0 && (
                  <Menu
                    id={`${page.name}-menu`}
                    anchorEl={page.anchor}
                    open={Boolean(page.anchor)}
                    onClose={() => {
                      page.anchor = null;
                      setPages([...pages]);
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
                    {page?.options.map((option, key) => (
                      <MenuItem key={key}>{option.name}</MenuItem>
                    ))}
                  </Menu>
                )}
              </Box>
            ))}
          </ListItem>
        </List>
      </Stack>
    </HeaderWrapper>
  );
}

export default SubHeader;
