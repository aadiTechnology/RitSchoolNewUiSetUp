import { Box, useTheme } from '@mui/material';
import BreadCrumbsContainer from 'src/components/BreadCrumbsContainer';
import Page from 'src/components/Page';

type Props = {};

const Timetable = (props: Props) => {
  const theme = useTheme();

  return (
    <Page>
      <Box>
        <BreadCrumbsContainer />
      </Box>
    </Page>
  );
};

export default Timetable;
