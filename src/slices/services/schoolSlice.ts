import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IGetSchoolSettingsResult, ISchool } from 'src/services/schoolServices';

interface SchoolState {
  schoolSettings: IGetSchoolSettingsResult;
  selectedSchool: ISchool;
}

const initialState: SchoolState = {
  schoolSettings: null,
  selectedSchool: null
};

const slice = createSlice({
  name: 'schoolSlice',
  initialState,
  reducers: {
    setSchoolSettings(
      state: SchoolState,
      action: PayloadAction<IGetSchoolSettingsResult>
    ) {
      const schoolSettings = action.payload;
      state.schoolSettings = schoolSettings;
    },
    setSelectedSchool(state: SchoolState, action: PayloadAction<ISchool>) {
      state.selectedSchool = action.payload;
    },
    clearSelectedSchool(state: SchoolState) {
      state.schoolSettings = null;
    },
    clearSchoolSettings(state: SchoolState) {
      state.schoolSettings = null;
    }
  }
});

export const getSchoolSettings = (state: any) =>
  state.schoolSettings.schoolSettings;
export const getSelectedSchool = (state: any) =>
  state.schoolSettings.selectedSchool;

export const {
  setSchoolSettings,
  setSelectedSchool,
  clearSelectedSchool,
  clearSchoolSettings
} = slice.actions;
export const reducer = slice.reducer;
export default slice;
