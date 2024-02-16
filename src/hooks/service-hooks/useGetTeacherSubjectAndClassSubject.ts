import { useEffect, useState } from 'react';
import {
    IGetTeacherSubjectAndClassSubjectBody,
    IGetTeacherSubjectAndClassSubjectResult,
    getTeacherSubjectAndClassSubject
} from 'src/services/teacherService';

export const useGetTeacherSubjectAndClassSubject = ({
    body
}: {
    body: IGetTeacherSubjectAndClassSubjectBody;
}) => {
    const [data, setData] = useState<IGetTeacherSubjectAndClassSubjectResult[]>(null);

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState('');

    const fetchSubjectData = async () => {
        setIsLoading(true);

        try {
            const response = await getTeacherSubjectAndClassSubject(body);
            setData(response.data);
            setIsLoading(false);
        } catch (err) {
            setIsError(err);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchSubjectData();
    }, []);

    return { data, isLoading, isError, fetchSubjectData };
};
