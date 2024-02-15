import {
  AccessTimeTwoTone,
  AddTaskTwoTone,
  AssignmentTwoTone,
  CakeTwoTone,
  CurrencyRupeeTwoTone,
  DateRangeTwoTone,
  EventNoteTwoTone,
  EventTwoTone,
  MenuBookTwoTone,
  PhotoTwoTone,
  SyncTwoTone,
  VideoLibraryTwoTone
} from '@mui/icons-material';
import {
  amber,
  blue,
  blueGrey,
  brown,
  cyan,
  deepOrange,
  deepPurple,
  green,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  orange,
  pink,
  purple,
  red,
  teal
} from '@mui/material/colors';

// List of colors
const colors = [
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey
];

export const homeItems = {
  schoolItems: {
    heading: 'School',
    items: [
      {
        id: 1,
        title: 'School Notices',
        icon: AssignmentTwoTone,
        link: '/dashboard/school-notices',
        color: blue[500]
      },
      {
        id: 2,
        title: 'Annual Planner',
        icon: DateRangeTwoTone,
        link: '/dashboard/annual-planner',
        color: blue[500]
      },
      {
        id: 3,
        title: 'Holidays',
        icon: DateRangeTwoTone,
        link: '/dashboard/holidays',
        color: blue[500]
      },
      {
        id: 4,
        title: 'Photo Gallery',
        icon: PhotoTwoTone,
        link: '/dashboard/photo-gallery',
        color: blue[500]
      },
      {
        id: 5,
        title: 'Video Gallery',
        icon: VideoLibraryTwoTone,
        link: '/dashboard/video-gallery',
        color: blue[500]
      },
      {
        id: 6,
        title: 'Birthdays',
        icon: CakeTwoTone,
        link: '/dashboard/video-gallery',
        color: blue[500]
      },
      {
        id: 7,
        title: 'Attendance',
        icon: EventTwoTone,
        link: '/dashboard/attendance',
        color: blue[500]
      },
      {
        id: 8,
        title: 'Timetable',
        icon: AccessTimeTwoTone,
        link: '/dashboard/timetable',
        color: blue[500]
      },
      {
        id: 9,
        title: 'Fees',
        icon: CurrencyRupeeTwoTone,
        link: '/dashboard/fees',
        color: blue[500]
      },
      {
        id: 10,
        title: 'Homework',
        icon: MenuBookTwoTone,
        link: '/dashboard/homework',
        color: blue[500]
      },
      {
        id: 11,
        title: 'Assign Exam Marks',
        icon: EventTwoTone,
        link: '/dashboard/assign-exam-marks',
        color: blue[500]
      },
      {
        id: 12,
        title: 'Assign Pre Primary',
        icon: MenuBookTwoTone,
        link: '/dashboard/assign-pre-primary',
        color: blue[500]
      },
      {
        id: 13,
        title: 'Progress',
        icon: SyncTwoTone,
        link: '/dashboard/progress',
        color: blue[500]
      },
      {
        id: 14,
        title: 'Add Homework',
        icon: AddTaskTwoTone,
        link: '/dashboard/add-homework',
        color: blue[500]
      }
    ]
  },
  teacherItems: {
    heading: 'Teacher',
    items: [
      {
        id: 1,
        title: 'Final Result Unpublish',
        icon: AssignmentTwoTone,
        link: '/dashboard/final-result-unpublish',
        color: blue[500]
      },
      {
        id: 2,
        title: 'Add Lesson Plan',
        icon: AssignmentTwoTone,
        link: '/dashboard/add-lesson-plan',
        color: blue[500]
      },
      {
        id: 3,
        title: 'Lesson Plan Base Screen',
        icon: AssignmentTwoTone,
        link: '/dashboard/lesson-plan-base-screen',
        color: blue[500]
      },
      {
        id: 4,
        title: 'Exam Result Unpublish',
        icon: AssignmentTwoTone,
        link: '/dashboard/exam-result-unpublish',
        color: blue[500]
      },
      {
        id: 5,
        title: 'Event Management',
        icon: AssignmentTwoTone,
        link: '/dashboard/event-management',
        color: blue[500]
      },
      {
        id: 6,
        title: 'Add Daily',
        icon: AssignmentTwoTone,
        link: '/dashboard/add-daily',
        color: blue[500]
      },
      {
        id: 7,
        title: 'Final Result',
        icon: AssignmentTwoTone,
        link: '/dashboard/final-result',
        color: blue[500]
      },
      {
        id: 8,
        title: 'Final Result Toppers',
        icon: AssignmentTwoTone,
        link: '/dashboard/final-result-toppers',
        color: blue[500]
      },
      {
        id: 0,
        title: 'Student Records',
        icon: AssignmentTwoTone,
        link: '/dashboard/student-records',
        color: blue[500]
      },
      {
        id: 10,
        title: 'Termwise Height Weight',
        icon: AssignmentTwoTone,
        link: '/dashboard/termwise-height-weight',
        color: blue[500]
      },
      {
        id: 11,
        title: 'Assign Homework',
        icon: AssignmentTwoTone,
        link: '/dashboard/assign-homework',
        color: blue[500]
      },
      {
        id: 12,
        title: 'Attendance',
        icon: EventNoteTwoTone,
        link: '/dashboard/attendance',
        color: blue[500]
      },
      {
        id: 13,
        title: 'Exam Schedule',
        icon: AssignmentTwoTone,
        link: '/dashboard/exam-schedule',
        color: blue[500]
      },
      {
        id: 14,
        title: 'Timetable',
        icon: AssignmentTwoTone,
        link: '/dashboard/timetable',
        color: blue[500]
      },
      {
        id: 15,
        title: 'Staff Birthday',
        icon: AssignmentTwoTone,
        link: '/dashboard/staff-birthday',
        color: blue[500]
      },
      {
        id: 16,
        title: 'Message Center',
        icon: AssignmentTwoTone,
        link: '/dashboard/message-center',
        color: blue[500]
      },
      {
        id: 17,
        title: 'Examresult',
        icon: MenuBookTwoTone,
        link: '/dashboard/examresult',
        color: blue[500]
      },
      {
        id: 18,
        title: 'AddEmployee',
        icon: MenuBookTwoTone,
        link: '/dashboard/addemployee',
        color: blue[500]
      }
    ]
  }
};
