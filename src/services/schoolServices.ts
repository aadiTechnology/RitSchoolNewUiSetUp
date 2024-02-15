/**
 * @file schoolServices.ts
 * @description This file contains the types and functions to fetch school data from the API.
 */

import axiosInt from 'src/utils/axios';
import { ServiceEndpoints } from './ServiceEndpoints';

/**
 * Interface for the School object.
 */
export interface ISchool {
  SchoolName: string;
  SmsSenderName: string;
  SchoolId: string;
  SiteURL: string;
  TermsSchoolName: string;
  FolderName: string;
  OrgName: any;
}

/**
 * Interface for the result of fetching school settings.
 */
export interface IGetSchoolSettingsResult {
  IsMPTApplicable: string;
  MPTLectNo: number;
  MPTName: string;
  MPTWeekday: string;
  BlockProgressReportIfFeesArePending: string;
  ProgressSheetNote: string;
  IsAssemblyApplicable: string;
  AssemblyLectNo: number;
  AssemblyName: string;
  AssemblyWeekday: string;
  IsStaybackApplicable: string;
  StaybackName: string;
  ShowProgressSheetNote: string;
  SiteName: any;
  SendMail: any;
  SendSMS: any;
  SMSSenderUPwd: any;
  SMSSenderUserName: string;
  FromMailAddress: any;
  SMSProvider: any;
  IsWeeklyTestApplicable: any;
  WeeklyTestName: any;
  WeeklyTestLectNo: any;
  WeeklyTestWeekDay: any;
}

/**
 * Interface for the School ID object.
 */
export interface ISchoolId {
  asSchoolId: string;
}

/**
 * Function to fetch all schools from the API.
 *
 * @returns An array of School objects.
 */
export const getAllSchools = async (body: ISchoolId) => {
  return axiosInt.post<{ GetAllSchoolsResult: ISchool[] }>(
    ServiceEndpoints.GET_ALL_SCHOOLS,
    body
  );
};

/**
 * Function to fetch the settings for a specific school from the API.
 *
 * @param schoolId The ID of the school to fetch the settings for.
 * @returns The settings for the specified school.
 */
export const getSchoolSettings = async (body: ISchoolId) => {
  return axiosInt.post<{
    GetSchoolSettingsResult: IGetSchoolSettingsResult;
  }>(ServiceEndpoints.GET_SCHOOL_SETTINGS, body);
};
