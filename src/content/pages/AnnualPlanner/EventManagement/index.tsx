import { Box, Stack } from '@mui/material';
import BreadCrumbsContainer from 'src/components/BreadCrumbsContainer';
import Page from 'src/components/Page';
import { useGetTeacherSubjectAndClassSubject } from 'src/hooks/service-hooks/useGetTeacherSubjectAndClassSubject';
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

          console.log(subjectlist);
          
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
    </Page>
  );
};

export default EventManagement;
