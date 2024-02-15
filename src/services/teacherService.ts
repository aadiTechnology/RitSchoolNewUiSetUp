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
