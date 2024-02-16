import { Autocomplete, Box, Stack, TextField } from '@mui/material';
import { GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import { useState } from 'react';
import BreadCrumbsContainer from 'src/components/BreadCrumbsContainer';
import Page from 'src/components/Page';
import { useGetTeacherSubjectAndClassSubject } from 'src/hooks/service-hooks/useGetTeacherSubjectAndClassSubject';
import {
    IGetTeacherSubjectAndClassSubjectResult
} from 'src/services/teacherService';
import storageUtil, { storageKeys } from 'src/utils/storage';

type Props = {};

const EventManagement = (props: Props) => {

    const academicYearId = JSON.parse(
        storageUtil.get(storageKeys.accessToken.name)
      )?.TeacherDetails?.AcademicYearId;
      const schoolId = JSON.parse(storageUtil.get(storageKeys.accessToken.name))
        ?.TeacherDetails?.SchoolId;
      const teacherId = JSON.parse(storageUtil.get(storageKeys.accessToken.name))
        ?.TeacherDetails?.TeacherId;
        const standardDivisionId = JSON.parse(
            storageUtil.get(storageKeys.accessToken.name)
          )?.TeacherDetails?.StandardDivisionId;

        const {  data: subjectlist, isLoading: studentListIsLoading  } = useGetTeacherSubjectAndClassSubject({
            body: {
                asSchoolId: schoolId,
                aTeacherId: teacherId,
                asAcademicYearId: academicYearId,
                asStandardDivisionId: standardDivisionId,
              }              
          });
          const columns: GridColDef[] = [
            { field: 'Subject_Id', headerName: 'Sr.No', width: 70 },
            { field: 'Subject_Name', headerName: 'Subject Name ', width: 70 },
            { field: 'TeacherShortName', headerName: 'Teacher Name', flex: 1 }
          ];
          const [rows, setRows] = useState<IGetTeacherSubjectAndClassSubjectResult[]>([]);
          const [markedAttendance, setMarkedAttendance] =
          useState<GridRowSelectionModel>([]);
          console.log(subjectlist);
          const [selectSubject, setSelectSubject] =
    useState<IGetTeacherSubjectAndClassSubjectResult>();
//   useEffect(() => {
//     if (subjectlist) {
//       const rowsCpy = subjectlist.map((subject) => ({
//         Subject_Id: subject.Subject_Id,
//         Subject_Name: subject.Subject_Name,
//         TeacherShortName: subject.TeacherShortName,
//         ...subject
//       }));

//       setRows(rowsCpy);
//       setMarkedAttendance(
//         rowsCpy.filter((row) => row.IsPresent === 'true').map((row) => row.id)
//       );
//     }
//   }, [subjectlist]);


  return (
    <Page>
      <Box>
        {/* Header */}
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <BreadCrumbsContainer />
        </Stack>
      </Box>
      <h1> hiii</h1>
      <Box sx={{ minWidth: 220 }}>
                <Autocomplete
                  disabled={!subjectlist}
                  options={subjectlist || []}
                  getOptionLabel={(option: IGetTeacherSubjectAndClassSubjectResult) =>
                    option?.Subject_Name || ''
                  }
                  freeSolo
                  value={selectSubject || ''}
                  onChange={(e, newValue) => {
                    setSelectSubject(newValue as IGetTeacherSubjectAndClassSubjectResult);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{
                        minWidth: '250px'
                      }}
                      size={'small'}
                      label={'Select Subject'}
                    />
                  )}
                  disableClearable
                />
              </Box>
    </Page>
  );
};

export default EventManagement;
