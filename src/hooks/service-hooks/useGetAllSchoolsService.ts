import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { ISchool, getAllSchools } from 'src/services/schoolServices';

/**
 * Custom React hook to fetch all schools from the API.
 *
 * @returns An object containing:
 * - schools: An array of School objects.
 * - isLoading: A boolean indicating whether the data is currently being fetched.
 * - isError: Any error that occurred while fetching the data.
 * - fetchAllSchools: A function to fetchAllSchools the data.
 */
export const useGetAllSchoolsService = () => {
  // State to hold the fetched schools
  const [schools, setSchools] = useState<ISchool[]>([]);
  const { enqueueSnackbar } = useSnackbar();

  // State to indicate whether data is currently being fetched
  const [isLoading, setLoading] = useState<boolean>(false);

  // State to hold any error that occurred while fetching
  const [isError, setError] = useState<any>(null);

  /**
   * Function to fetch the schools from the API.
   * This function can be called to fetchAllSchools the data.
   */
  const fetchAllSchools = async () => {
    setLoading(true);
    try {
      const response = await getAllSchools({ asSchoolId: 'Default' });
      setSchools(response.data?.GetAllSchoolsResult);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch the data when the component mounts
  useEffect(() => {
    fetchAllSchools();
  }, []);

  // Error handling
  useEffect(() => {
    if (isError) {
      console.log(isError);
      enqueueSnackbar('An error occurred while fetching the schools', {
        variant: 'error'
      });
    }
  }, [isError]);

  // Return the fetched schools, loading and error states, and the fetchAllSchools function
  return { schools, isLoading, isError, fetchAllSchools };
};
