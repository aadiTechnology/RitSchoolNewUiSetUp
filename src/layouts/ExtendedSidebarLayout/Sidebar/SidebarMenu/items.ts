import type { ReactNode } from 'react';

import {
  AssignmentTwoTone,
  CalendarTodayTwoTone,
  FeaturedPlayListTwoTone
} from '@mui/icons-material';
import DashboardTwoTone from '@mui/icons-material/DashboardTwoTone';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  badgeTooltip?: string;

  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: '',
    items: [
      {
        name: 'Dashboard',
        icon: DashboardTwoTone,
        link: '/dashboard/home'
      },
      {
        name: 'Monthwise Attendance',
        icon: CalendarTodayTwoTone,
        link: '/dashboard/attendance/monthwise-attendance'
      },
      {
        name: 'Individual Attendance',
        icon: CalendarTodayTwoTone,
        link: '/dashboard/attendance/individual-attendance'
      },
      {
        name: 'Assign Homwework',
        icon: AssignmentTwoTone,
        link: '/dashboard/assign-homework'
      },
      {
        name: 'Assign Exam Marks',
        icon: FeaturedPlayListTwoTone,
        link: '/dashboard/assign-exam-marks'
      },
      {
        name: 'Event Management',
        icon: FeaturedPlayListTwoTone,
        link: '/dashboard/event-management'
      }
    ]
  }
];

export default menuItems;
