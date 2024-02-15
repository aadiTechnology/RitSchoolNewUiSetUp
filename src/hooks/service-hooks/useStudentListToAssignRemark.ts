import { useEffect, useState } from 'react';
import {
    IStudentListDropDowntBody,
    IStudentListDropDownResult,
    getStudentListToAssignRemark
} from 'src/services/teacherService';

export const useStudentListToAssignRemark = ({
  body
}: {
  body: IStudentListDropDowntBody;
}) => {
  const [student, setStudent] = useState<IStudentListDropDownResult[]>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  const fetchStudentData = async () => {
    setIsLoading(true);

    try {
      const response = await getStudentListToAssignRemark(body);
      setStudent(response.data);
      setIsLoading(false);
    } catch (err) {
      setIsError(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  return { student, isLoading, isError, fetchStudentData };
};
