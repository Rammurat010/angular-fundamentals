import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000/api/employees';

  constructor(private http: HttpClient) {}

  // Get all employees
  getEmployees(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Get single employee
  getEmployee(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Add employee
  addEmployee(employee: Employee): Observable<any> {
    return this.http.post<any>(this.apiUrl, employee);
  }

  // Update employee
  updateEmployee(id: number, employee: Employee): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, employee);
  }

  // Delete employee
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
