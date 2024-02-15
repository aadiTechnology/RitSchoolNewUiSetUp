import { Box, Breadcrumbs, useTheme } from '@mui/material';
import BreadcrumbItem from 'src/components/BreadCrumbsContainer/BreadcrumbItem';
import Page from 'src/components/Page';
import { getBreadCrumbsFromPath } from 'src/utils/common';

type Props = {};

const Calendar = (props: Props) => {
  const theme = useTheme();

  return (
    <Page>
      <Box>
        <Breadcrumbs aria-label="breadcrumb">
          {getBreadCrumbsFromPath().map((item, index) => (
            <BreadcrumbItem item={item} index={index} key={index} />
          ))}
        </Breadcrumbs>
      </Box>
    </Page>
  );
};

export default Calendar;
