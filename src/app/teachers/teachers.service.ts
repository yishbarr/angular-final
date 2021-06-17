import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from "rxjs/operators";
import { CLASSES } from '../dumm-data-classes';
import { TEACHERS } from './dummy-data-teachers';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor() { }
  getTeachers() {
    return of(TEACHERS);
  }
  getClasses(){
    return of(CLASSES);
  }
  getTeacherById(id: string | number) {
    return this.getTeachers()
    .pipe(map(t => t.find(teacher => teacher.id === id + "")))
  }
}


