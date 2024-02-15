import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const Home = Loader(lazy(() => import('src/content/pages/Home')));
const AssignHomework = Loader(
  lazy(() => import('src/content/pages/AssignHomework'))
);
const AssignExamMarks = Loader(
  lazy(() => import('src/content/pages/AssignExamMarks'))
);
const AnnualPlanner = Loader(
  lazy(() => import('src/content/pages/AnnualPlanner'))
);
const SchoolNotices = Loader(
  lazy(() => import('src/content/pages/SchoolNotices'))
);
const Holidays = Loader(lazy(() => import('src/content/pages/Holidays')));
const PhotoGallery = Loader(
  lazy(() => import('src/content/pages/PhotoGallery'))
);
const VideoGallery = Loader(
  lazy(() => import('src/content/pages/VideoGallery'))
);
const Birthdays = Loader(lazy(() => import('src/content/pages/Birthdays')));
const Timetable = Loader(lazy(() => import('src/content/pages/Timetable')));
const Fees = Loader(lazy(() => import('src/content/pages/Fees')));
const Homework = Loader(lazy(() => import('src/content/pages/Homework')));
const AssignPrePrimary = Loader(
  lazy(() => import('src/content/pages/AssignPrePrimary'))
);
const Progress = Loader(lazy(() => import('src/content/pages/Progress')));
const AddHomework = Loader(lazy(() => import('src/content/pages/AddHomework')));
const Attendance = Loader(lazy(() => import('src/content/pages/Attendance')));
const MonthwiseAttendance = Loader(
  lazy(() => import('src/content/pages/Attendance/MonthwiseAttendance'))
);
const IndividualAttendance = Loader(
  lazy(() => import('src/content/pages/Attendance/IndividualAttendance'))
);
const ExamResult = Loader(lazy(() => import('src/content/pages/ExamResult')));

const dashboardsRoutes = [
  {
    path: '',
    element: <Navigate to={'home'} />
  },
  {
    path: 'home',
    element: <Home />
  },
  {
    path: 'attendance',
    element: <Attendance />
  },
  {
    path: 'attendance/monthwise-attendance',
    element: <MonthwiseAttendance />
  },
  {
    path: 'attendance/individual-attendance',
    element: <IndividualAttendance />
  },
  {
    path: 'annual-planner',
    element: <AnnualPlanner />
  },
  {
    path: 'assign-homework',
    element: <AssignHomework />
  },
  {
    path: 'assign-exam-marks',
    element: <AssignExamMarks />
  },
  {
    path: 'school-notices',
    element: <SchoolNotices />
  },
  {
    path: 'holidays',
    element: <Holidays />
  },
  {
    path: 'photo-gallery',
    element: <PhotoGallery />
  },
  {
    path: 'video-gallery',
    element: <VideoGallery />
  },
  {
    path: 'birthdays',
    element: <Birthdays />
  },
  {
    path: 'timetable',
    element: <Timetable />
  },
  {
    path: 'fees',
    element: <Fees />
  },
  {
    path: 'homework',
    element: <Homework />
  },
  {
    path: 'assign-pre-primary',
    element: <AssignPrePrimary />
  },
  {
    path: 'progress',
    element: <Progress />
  },
  {
    path: 'add-homework',
    element: <AddHomework />
  },

  {
    path: 'examresult',
    element: <ExamResult />
  }


];

export default dashboardsRoutes;
