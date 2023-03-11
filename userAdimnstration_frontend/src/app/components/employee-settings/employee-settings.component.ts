import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {ToastrService} from 'ngx-toastr';
import {Employees} from '../../dto/employees';
import {DepartmentService} from '../../services/department.service';
import {Departments} from '../../dto/departments';

@Component({
  selector: 'app-employee-settings',
  templateUrl: './employee-settings.component.html',
  styleUrls: ['./employee-settings.component.css']
})
export class EmployeeSettingsComponent implements OnInit {

  employee: Employees = {};
  updateMode = false;
  first = 0;
  page = 0;
  pageSize = 10;
  totalElements = 0;
  loadingTable = false;
  loading = false;
  searchResults?: any = {content: []};
  employeeList: Employees[] = [];
  departmentsList: Departments[] = [];

  constructor(private toasterService: ToastrService, private employeeService: EmployeeService,
              private departmentService: DepartmentService) {
  }

  ngOnInit(): void {
    this.search();
    this.employeeService.getAllEmployees().subscribe(data => this.employeeList = data);
    this.departmentService.getAllDepartments().subscribe(data => this.departmentsList = data);
  }

  search() {
    this.loadingTable = true;
    this.employeeService.getAllWithPaginator(this.page, this.pageSize).subscribe((response: any) => {
      this.searchResults = response;
      this.pageSize = this.searchResults.size;
      this.totalElements = this.searchResults.totalElements;
      this.loading = false;
      this.loadingTable = false;
    });
  }

  add() {
    if (!this.updateMode) {
      this.employeeService.addNewEmployees(this.employee).subscribe((data: Employees) => {
          this.search();
          this.employee = {};
          this.updateMode = false;
          this.toasterService.success('تم اضافة موظف جديد بنجاح!');
        }
      );
    } else {
      this.employeeService.updateEmployees(this.employee).subscribe((data: Employees) => {
          this.search();
          this.employee = {};
          this.updateMode = false;
          this.toasterService.success('تم تعديل بيانات الموظف بنجاح!');
        }
      );
    }

  }

  edit(updateService: Employees) {
    this.employee = updateService;
    this.updateMode = true;
  }

  deleteItem(medicine: Employees) {
    this.employeeService.deleteEmployees(medicine).subscribe((data: String) => {
        this.updateMode = false;
        this.employee = {};
        this.toasterService.warning('تم حذف بيانات الموظف بنجاح!');
        this.search();
      }
    );
  }

  paginate(event: any) {
    this.loading = true;
    this.page = event.rows != 0 ? event.first / event.rows : 0;
    this.pageSize = event.rows;

    this.search();
  }

}
