import {Employees} from './employees';


export interface Departments {
  departmentId?: number;
  departmentName?: string;
  managerId?: Employees;
}
