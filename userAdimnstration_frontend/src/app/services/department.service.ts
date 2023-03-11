import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Departments} from '../dto/departments';



@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) {
  }

  getAllDepartments(): Observable<Departments[]> {
    let url = `${environment.apiUrl}/departments`;
    return this.http.get<any>(url);
  }

  getAllWithPaginator(page: number, size: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('page', String(page));
    params = params.append('size', String(size));
    let url = `${environment.apiUrl}/departmentsWithPagination`;
    return this.http.get<any>(url, {params: params});
  }

  addNewDepartments(department: Departments): Observable<Departments> {
    let url = `${environment.apiUrl}/departments`;
    return this.http.post<any>(url, department);
  }

  updateDepartments(department: Departments): Observable<Departments> {
    let url = `${environment.apiUrl}/departments`;
    return this.http.put<any>(url, department);
  }

  deleteDepartments(department: Departments): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    Object.assign(options, {responseType: 'text'});
    let url = `${environment.apiUrl}/departments?id=${department.departmentId}`;
    return this.http.delete<any>(url ,options);
  }
}

