import { combineReducers } from '@reduxjs/toolkit';
import { reducer as calendarReducer } from 'src/slices/calendar';
import { reducer as mailboxReducer } from 'src/slices/mailbox';
import { reducer as projectsBoardReducer } from 'src/slices/projects_board';
import { reducer as schoolReducer } from 'src/slices/services/schoolSlice';

const rootReducer = combineReducers({
  // App reducers
  calendar: calendarReducer,
  projectsBoard: projectsBoardReducer,
  mailbox: mailboxReducer,
  // Service reducers
  schoolSlice: schoolReducer
});

export default rootReducer;
