import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import {
  IGetSchoolSettingsResult,
  getSchoolSettings
} from 'src/services/schoolServices';

/**
 * Custom React hook to fetch school settings from the API for a specific school.
 *
 * @param {string} id - The ID of the school for which to fetch the settings.
 * @param {Object} options - An object containing options for the hook.
 * @param {boolean} options.refetchOnArgsChange - Whether to refetch data when the id changes.
 * @param {boolean} options.skip - Whether to skip fetching data initially.
 *
 * @returns An object containing:
 * - schoolSettings: An IGetSchoolSettingsResult object containing the school settings.
 * - isLoading: A boolean indicating whether the data is currently being fetched.
 * - isError: Any error that occurred while fetching the data.
 * - fetchSchoolSettings: A function that can be called to manually refetch the data.
 */
export const useGetSchoolSettingsService = (
  id: string,
  { refetchOnArgsChange = false, skip = false } = {}
) => {
  // State to hold the fetched school settings
  const [schoolSettings, setSchoolSettings] =
    useState<IGetSchoolSettingsResult>();
  const { enqueueSnackbar } = useSnackbar();

  // State to indicate whether data is currently being fetched
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // State to hold any error that occurred while fetching
  const [isError, setIsError] = useState<any>(null);

  /**
   * Function to fetch the school settings from the API.
   */
  const fetchSchoolSettings = async () => {
    setIsLoading(true);
    try {
      const response = await getSchoolSettings({ asSchoolId: id });
      setSchoolSettings(response.data?.GetSchoolSettingsResult);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch the data when the component mounts and id changes
  useEffect(() => {
    if (!skip) {
      fetchSchoolSettings();
    }
  }, [refetchOnArgsChange ? id : undefined, skip]);

  // Error handling
  useEffect(() => {
    if (isError) {
      console.log(isError);
      enqueueSnackbar('An error occurred while fetching the school settings', {
        variant: 'error'
      });
    }
  }, [isError]);

  // Return the fetched school settings, loading and error states, and the refetch function
  return { schoolSettings, isLoading, isError, fetchSchoolSettings };
};
