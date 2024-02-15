import { Stack } from '@mui/material';
import BreadCrumbsContainer from 'src/components/BreadCrumbsContainer';
import Page from 'src/components/Page';
import { useStudentListToAssignRemark } from 'src/hooks/service-hooks/useStudentListToAssignRemark';
import storageUtil, { storageKeys } from 'src/utils/storage';
type Props = {};

const ExamResult = (props: Props) => {

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


    
const { student } = useStudentListToAssignRemark({
    body: {
        asStandard_Division_Id: standardDivisionId,
        asAcademicYearId: academicYearId,
        asSchoolId: schoolId,
        
    }
  });

  console.log(student,"student");
  

  return (
    <Page>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <BreadCrumbsContainer />
      </Stack>
      </Page>
  );
};

export default ExamResult;
