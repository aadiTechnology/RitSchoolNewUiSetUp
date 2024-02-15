import { Stack } from '@mui/material';
import BreadCrumbsContainer from 'src/components/BreadCrumbsContainer';
import Page from 'src/components/Page';

type Props = {};

const IndividualAttendance = (props: Props) => {
  return (
    <Page>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <BreadCrumbsContainer />
      </Stack>
    </Page>
  );
};

export default IndividualAttendance;
