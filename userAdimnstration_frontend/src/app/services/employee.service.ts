import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Employees} from '../dto/employees';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  getAllEmployees(): Observable<Employees[]> {
    let url = `${environment.apiUrl}/employees`;
    return this.http.get<any>(url);
  }

  getAllWithPaginator(page: number, size: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('page', String(page));
    params = params.append('size', String(size));
    let url = `${environment.apiUrl}/employeesWithPagination`;
    return this.http.get<any>(url, {params: params});
  }

  addNewEmployees(employee: Employees): Observable<Employees> {
    let url = `${environment.apiUrl}/employees`;
    return this.http.post<any>(url, employee);
  }

  updateEmployees(employee: Employees): Observable<Employees> {
    let url = `${environment.apiUrl}/employees`;
    return this.http.put<any>(url, employee);
  }

  deleteEmployees(employee: Employees): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    Object.assign(options, {responseType: 'text'});
    let url = `${environment.apiUrl}/employees?id=${employee.employeeId}`;
    return this.http.delete<any>(url ,options);
  }
}

