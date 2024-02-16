
import BreadCrumbsContainer from 'src/components/BreadCrumbsContainer';
import Page from 'src/components/Page';
import { useStudentListToAssignRemark } from 'src/hooks/service-hooks/useStudentListToAssignRemark';
import storageUtil, { storageKeys } from 'src/utils/storage';
import {
  Autocomplete,
  Box,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import {
IStudentListDropDownResult
} from 'src/services/teacherService';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
type Props = {};
const ExamResult = (props: Props) => {
  const theme = useTheme();
  const [selectedStudent, setSelectedStudent] =
  useState<IStudentListDropDownResult>();
 const { data: StudentData } = useStudentListToAssignRemark({
    body: {
      asAcademicYearId: JSON.parse(storageUtil.get(storageKeys.accessToken.name))
        ?.TeacherDetails?.AcademicYearId,
      asSchoolId: JSON.parse(storageUtil.get(storageKeys.accessToken.name))
        ?.TeacherDetails?.SchoolId,

      asStandard_Division_Id: JSON.parse(storageUtil.get(storageKeys.accessToken.name))
        ?.TeacherDetails?.StandardDivisionId
    }
  });

  console.log(StudentData,"student");
  return (
    <Page>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <BreadCrumbsContainer />
      </Stack>
      <Box sx={{ minWidth: 220 }}>
                <Autocomplete
                 disabled={!StudentData}
                  options={StudentData || []}
                  getOptionLabel={(option: IStudentListDropDownResult) =>
                    option?.Student_Name || ''
                  }
                  freeSolo
                  value={selectedStudent || ''}
                  onChange={(e, newValue) => {
                    setSelectedStudent(newValue as IStudentListDropDownResult);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{
                        minWidth: '250px'
                      }}
                      size={'small'}
                      label={'Select Student'}
                    />
                  )}
                  disableClearable
                />
              </Box>
      </Page>
  );
};

export default ExamResult;
