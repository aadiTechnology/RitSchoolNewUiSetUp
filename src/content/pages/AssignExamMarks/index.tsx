import { Box, useTheme } from '@mui/material';
import BreadCrumbsContainer from 'src/components/BreadCrumbsContainer';
import Page from 'src/components/Page';

type Props = {};

const AssignExamMarks = (props: Props) => {
  const theme = useTheme();

  return (
    <Page>
      <Box>
        <BreadCrumbsContainer />
      </Box>
    </Page>
  );
};

export default AssignExamMarks;
