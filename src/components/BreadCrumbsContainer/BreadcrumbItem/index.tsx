import { Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { getBreadCrumbsFromPath } from 'src/utils/common';

type Props = { item: any; index: number };

const BreadcrumbItem = ({ item, index }: Props) => {
  const theme = useTheme();

  return (
    <Typography
      variant={index === getBreadCrumbsFromPath().length - 1 ? 'h4' : 'body2'}
      fontWeight={
        index === getBreadCrumbsFromPath().length - 1 ? 'bold' : 'normal'
      }
    >
      <Link
        color="inherit"
        to={item?.link}
        style={{
          color:
            index === getBreadCrumbsFromPath().length - 1
              ? theme.palette.primary.main
              : theme.palette.common.black,
          textDecoration: 'none'
        }}
      >
        {item?.label}
      </Link>
    </Typography>
  );
};

export default BreadcrumbItem;
