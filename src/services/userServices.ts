import axiosInt from 'src/utils/axios';
import { ServiceEndpoints } from './ServiceEndpoints';

export interface IUser {
  AuthenticateUserResult: IAuthenticateUserResult;
  StudentDetails: any;
  TeacherDetails: ITeacherDetails;
  AdminStaffDetails: IAdminStaffDetails;
}

export interface IAuthenticateUserResult {
  Id: number;
  RoleId: number;
  RoleName: string;
  UserLogin: string;
  IsLocked: string;
  IsDeleted: string;
  IsValid: string;
  IsDummyAdmission: string;
  IsLogoutRequired: string;
  CurrentAcademicYearID: number;
  Message: any;
  LastPasswordChangeDate: string;
  TermsAccepted: string;
  Name: string;
  PhotoFilePath: string;
  RolewiseUserId: any;
  ShowChangePasswordScreen: number;
  IsAaryanSchool: number;
  AadharCardNo: any;
  AadharCardFileName: any;
  AllowAadharCardSubmit: boolean;
  NameOnAadharCard: any;
  MotherTounge: any;
  Email: any;
}

export interface ITeacherDetails {
  TeacherId: number;
  IsClassTeacher: string;
  DesignationName: string;
  ClassName: string;
  IsPreprimary: string;
  StandardDivisionId: number;
  MobileNumber: string;
  Address: string;
  DOB: string;
  SchoolId: number;
  AcademicYearId: number;
  StartDate: string;
  EndDate: string;
}
export interface ILogin {
  asUserName: string;
  asPassword: string;
  asSchoolId: string;
  asIsSiblingLogin: boolean;
}

export interface IAdminStaffDetails {
  GetAdminStaffResult: any;
}

export const authenticateUser = async (body: ILogin) => {
  return axiosInt.post<IUser>(ServiceEndpoints.AUTHENTICATE_USER, body);
};
