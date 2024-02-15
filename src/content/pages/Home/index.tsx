import {
  Box,
  Divider,
  Grid,
  ListItemButton,
  Stack,
  Typography,
  alpha,
  useTheme
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Page from 'src/components/Page';
import { homeItems } from './homeItems';

type Props = {};

const Home = (props: Props) => {
  const theme = useTheme();
  const { schoolItems, teacherItems } = homeItems;
  const navigate = useNavigate();

  return (
    <Page>
      <Stack gap={2}>
        {[schoolItems, teacherItems].map((menuItem) => (
          <Box
            key={menuItem.heading}
            sx={{
              backgroundColor: theme.palette.common.white,
              borderRadius: theme.general.borderRadius,
              p: theme.spacing(2),
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}
          >
            <Typography variant={'h4'}>{menuItem.heading}</Typography>
            <Divider />
            <Box>
              <Grid container spacing={2} justifyContent={'center'}>
                {menuItem.items.map((item) => (
                  <Grid item lg={2} md={3} sm={4} xs={6} key={item.id}>
                    <ListItemButton
                      sx={{
                        p: theme.spacing(1),
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        color: theme.colors.primary.main,
                        backgroundColor: alpha(theme.colors.primary.main, 0.1),
                        '&:hover': {
                          backgroundColor: alpha(theme.colors.primary.main, 0.2)
                        }
                      }}
                      onClick={() => {
                        navigate(item.link);
                      }}
                    >
                      <item.icon
                        fontSize="large"
                        sx={{ color: theme.colors.primary.main }}
                      />
                      <Typography
                        fontWeight={'bold'}
                        variant={'body1'}
                        textAlign={'center'}
                      >
                        {item.title}
                      </Typography>
                    </ListItemButton>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        ))}
      </Stack>
    </Page>
  );
};

export default Home;
