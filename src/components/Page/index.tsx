import { Box } from '@mui/material';

const Page = ({ children }) => {
  return <Box sx={{ padding: (theme) => theme.spacing(0, 2) }}>{children}</Box>;
};

export default Page;
