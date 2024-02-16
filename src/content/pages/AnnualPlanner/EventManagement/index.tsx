import { Box, Stack } from '@mui/material';
import BreadCrumbsContainer from 'src/components/BreadCrumbsContainer';
import Page from 'src/components/Page';

type Props = {};

const EventManagement = (props: Props) => {
  return (
    <Page>
      <Box>
        {/* Header */}
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <BreadCrumbsContainer />
        </Stack>
      </Box>
    </Page>
  );
};

export default EventManagement;
