import {Departments} from './departments';

export interface Employees {
  employeeId?: number;
  firstName?: string;
  lastName?: string;
  phone_number?: string;
  hireDate?: Date;
  salary?: number;
  managerId?: Employees;
  email?: string;
  departmentId?: Departments;
}
