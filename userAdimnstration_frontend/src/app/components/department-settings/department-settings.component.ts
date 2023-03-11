import {Component, OnInit} from '@angular/core';
import {Departments} from '../../dto/departments';
import {ToastrService} from 'ngx-toastr';
import {DepartmentService} from '../../services/department.service';
import {Employees} from '../../dto/employees';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-department-settings',
  templateUrl: './department-settings.component.html',
  styleUrls: ['./department-settings.component.css']
})
export class DepartmentSettingsComponent implements OnInit {
  department: Departments = {};
  updateMode = false;
  first = 0;
  page = 0;
  pageSize = 10;
  totalElements = 0;
  loadingTable = false;
  loading = false;
  searchResults?: any = {content: []};
  departmentList: Departments[] = [];
  employeeList: Employees[] = [];

  constructor(private toasterService: ToastrService,
              private departmentService: DepartmentService, private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.search();
    this.departmentService.getAllDepartments().subscribe(data => this.departmentList = data);
    this.employeeService.getAllEmployees().subscribe(data => this.employeeList = data);

  }

  search() {
    this.loadingTable = true;
    this.departmentService.getAllWithPaginator(this.page, this.pageSize).subscribe((response: any) => {
      this.searchResults = response;
      this.pageSize = this.searchResults.size;
      this.totalElements = this.searchResults.totalElements;
      this.loading = false;
      this.loadingTable = false;
    });
  }

  add() {
    if (!this.updateMode) {
      this.departmentService.addNewDepartments(this.department).subscribe((data: Departments) => {
          this.search();
          this.department = {};
          this.updateMode = false;
          this.toasterService.success('تم اضافة ادارة جديد بنجاح!');
        }
      );
    } else {
      this.departmentService.updateDepartments(this.department).subscribe((data: Departments) => {
          this.search();
          this.department = {};
          this.updateMode = false;
          this.toasterService.success('تم تعديل بيانات الادارة بنجاح!');
        }
      );
    }

  }

  edit(updateService: Departments) {
    this.department = updateService;
    this.updateMode = true;
  }

  deleteItem(medicine: Departments) {
    this.departmentService.deleteDepartments(medicine).subscribe((data: String) => {
        this.updateMode = false;
        this.department = {};
        this.toasterService.warning('تم حذف بيانات الادارة بنجاح!');
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
