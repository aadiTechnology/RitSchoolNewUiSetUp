import { ApiTwoTone } from '@mui/icons-material';
import { Box, Breadcrumbs, Stack, useTheme } from '@mui/material';
import { getBreadCrumbsFromPath } from 'src/utils/common';
import BreadcrumbItem from './BreadcrumbItem';

type Props = {};

const BreadCrumbsContainer = (props: Props) => {
  const theme = useTheme();

  return (
    <Stack direction={'row'} alignItems={'center'} gap={2}>
      <Box
        sx={{
          boxShadow: '0px 0px 5px 0px #00000033',
          borderRadius: theme.general.borderRadius,
          backgroundColor: theme.palette.common.white,
          height: '40px',
          width: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ApiTwoTone color={'primary'} />
      </Box>
      <Breadcrumbs aria-label="breadcrumb">
        {getBreadCrumbsFromPath().map((item, index) => (
          <BreadcrumbItem item={item} index={index} key={index} />
        ))}
      </Breadcrumbs>
    </Stack>
  );
};

export default BreadCrumbsContainer;
