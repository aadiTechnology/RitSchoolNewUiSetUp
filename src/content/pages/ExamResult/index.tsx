import { Stack } from '@mui/material';
import BreadCrumbsContainer from 'src/components/BreadCrumbsContainer';
import Page from 'src/components/Page';

type Props = {};

const ExamResult = (props: Props) => {
  return (
    <Page>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <BreadCrumbsContainer />
      </Stack>
      <h4> Hello</h4>
    </Page>
  );
};

export default ExamResult;
