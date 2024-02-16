import axiosInt from 'src/utils/axios';
import { ServiceEndpoints } from './ServiceEndpoints';

export interface IGetClassTeachersBodynew {
  asSchoolId: number;
  asAcadmicYearId: number;
  asTeacher_id: number;
}

export interface IGetClassTeachersResultnew {
  TeacherName: string;
  Teacher_Id: string;
  Designation_Id: string;
  Teacher_First_Name: string;
  Standard_Name: string;
  Division_Name: string;
  Original_Standard_Id: string;
  Original_Division_Id: string;
  SchoolWise_Standard_Division_Id: string;
  Is_PrePrimary: string;
}

export const getAllPrimaryClassTeachers = async (
  body: IGetClassTeachersBodynew
) => {
  return axiosInt.post<IGetClassTeachersResultnew[]>(
    ServiceEndpoints.GET_ALL_PRIMARY_CLASS_TEACHERS,
    body
  );
};

export interface IStudentListDropDowntBody {
  asStandard_Division_Id: number
  asSchoolId: number
  asAcademicYearId: number
}

export interface IStudentListDropDownResult {
  Standard_Id: string
  Division_Id: string
  Student_Id: string
  Student_Name: string
  Academic_Year_Id: string
  Roll_No: string
  SchoolWise_Standard_Division_Id: string
  SchoolLeft_Date: string
  Joining_Date: string
  Teacher_Id: string
}

export const getStudentListToAssignRemark = async (
  body: IStudentListDropDowntBody
) => {
  return axiosInt.post<IStudentListDropDownResult[]>(
    ServiceEndpoints.GET_STUDENT_LIST_ASSIGNREMARK,
    body
  );
};

export interface IGetTeacherSubjectAndClassSubjectBody {
  asSchoolId: number;
  aTeacherId: number;
  asAcademicYearId: number;
  asStandardDivisionId: number;
}
export interface IGetTeacherSubjectAndClassSubjectResult {
  Standard_Id: string;
  Standard_Name: string;
  TeacherShortName: string;
  Is_ClassTeacher: string;
  Subject_Name: string;
  Standard_Division_Id: string;
  Teacher_Subject_Id: string;
  Subject_Id: string;
  Teacher_Id: string;
  StandardDivision: string;
  Teacher_Subject: string;
  maxSubjectLecturesInWeek: string;
  MySubject: string;
}