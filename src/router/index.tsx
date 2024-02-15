import { RouteObject } from 'react-router';
import Authenticated from 'src/components/Authenticated';
import BaseLayout from 'src/layouts/BaseLayout';
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';

import accountRoutes from './account';
import baseRoutes from './base';
import dashboardsRoutes from './dashboards';

const router: RouteObject[] = [
  {
    path: 'account',
    children: accountRoutes
  },
  {
    path: '',
    element: <BaseLayout />,
    children: baseRoutes
  },
  {
    path: 'dashboard',
    element: (
      <Authenticated>
        <ExtendedSidebarLayout />
      </Authenticated>
    ),
    children: [
      {
        path: '',
        children: dashboardsRoutes
      }
    ]
  }
];

export default router;
