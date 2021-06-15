import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from "rxjs/operators"
import { TEACHERS } from './dummy-data-teachers';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor() { }
  getTeachers() {
    return of(TEACHERS);
  }
  getTeacherById(id: string | number) {
    return this.getTeachers()
    .pipe(map(t => t.find(teacher => teacher.id === id + "")))
  }
}
