import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Editor, SchoolClass } from 'src/app/app.model';
import { Teacher } from '../teachers.model';
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit, Editor {

  teacher: Observable<Teacher>;
  classes: Observable<SchoolClass[]>;
  teacherObj: Teacher;
  classesObj: SchoolClass[];
  classesCheck = {};

  fullName: string;
  id: string;
  age: number;
  city: string;
  prof: string;
  seniority: number;
  hoursPerMonth: number;
  hourlyWage: number;
  photo: string;
  classesForTeacher: SchoolClass[];
  constructor(private service: TeachersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.teacher = this.route.paramMap.pipe(
      switchMap(p =>
        this.service.getTeacherById(p.get("id")
        )
      )
    )
    this.teacher.subscribe(t => this.teacherObj = t)

    this.fullName = this.teacherObj.fullname;
    this.age = this.teacherObj.age;
    this.city = this.teacherObj.city;
    this.prof = this.teacherObj.prof;
    this.seniority = this.teacherObj.seniority;
    this.hourlyWage = this.teacherObj.hourlyWage;
    this.hoursPerMonth = this.teacherObj.hoursPerMonth;
    this.photo = this.teacherObj.photo;
    this.id = this.teacherObj.id;
    this.classesForTeacher = this.teacherObj.classes;

    this.classes = this.service.getClasses();
    this.classes.subscribe(c => {
      c.forEach(sclass => this.isChecked(sclass));
      this.classesObj = c;
    })
  }

  applyChanges() {
    this.teacherObj.age = this.age;
    this.teacherObj.city = this.city;
    this.teacherObj.prof = this.prof;
    this.teacherObj.fullname = this.fullName;
    this.teacherObj.hourlyWage = this.hourlyWage;
    this.teacherObj.hoursPerMonth = this.hoursPerMonth;
    this.teacherObj.id = this.id;
    this.teacherObj.photo = this.photo;
    this.teacherObj.seniority = this.seniority;
  }

  tick(event) {
    if (event.target.checked)
      this.classesForTeacher.push(this.classesObj.find(c => c.id == event.target.value))
    else
      this.classesForTeacher = this.classesForTeacher.filter(c => c.id != event.target.value)
    console.log(event.target.value);
    console.log(this.classesForTeacher);

  }

  isChecked(schoolClass: SchoolClass) {

    if (this.classesForTeacher.includes(schoolClass))
      this.classesCheck = { ...this.classesCheck, [schoolClass.id]: true }
    console.log(this.classesCheck[schoolClass.id]);
  }
}