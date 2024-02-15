import { useEffect, useState } from 'react';
import {
  IGetClassTeachersBodynew,
  IGetClassTeachersResultnew,
  getAllPrimaryClassTeachers
} from 'src/services/teacherService';

export const useAllPrimaryClassTeachersService = ({
  body
}: {
  body: IGetClassTeachersBodynew;
}) => {
  const [teachers, setTeachers] = useState<IGetClassTeachersResultnew[]>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  const fetchTeachersData = async () => {
    setIsLoading(true);

    try {
      const response = await getAllPrimaryClassTeachers(body);
      setTeachers(response.data);
      setIsLoading(false);
    } catch (err) {
      setIsError(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachersData();
  }, []);

  return { teachers, isLoading, isError, fetchTeachersData };
};
