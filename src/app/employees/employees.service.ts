import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EMPLOYEES } from './dummy-data-employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }
  getEmployees() {
    return of(EMPLOYEES);
  }
  getEmployeeById(id: string | number) {
    return this.getEmployees()
      .pipe(map(e => e.find(employee => employee.id === id + "")))
  }
}
