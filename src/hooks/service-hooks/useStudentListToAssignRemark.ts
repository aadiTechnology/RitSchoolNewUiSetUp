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
  const [data, setSetdata] = useState<IStudentListDropDownResult[]>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  const fetchStudentData = async () => {
    setIsLoading(true);

    try {
      const response = await getStudentListToAssignRemark(body);
      setSetdata(response.data);
      setIsLoading(false);
    } catch (err) {
      setIsError(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  return { data, isLoading, isError, fetchStudentData };
};
