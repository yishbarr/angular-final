import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Editor, SchoolClass } from 'src/app/app.model';
import { Pupil } from '../pupils.model';
import { PupilsService } from '../pupils.service';

@Component({
  selector: 'app-edit-pupil',
  templateUrl: './edit-pupil.component.html',
  styleUrls: ['./edit-pupil.component.css']
})
export class EditPupilComponent implements OnInit, Editor {

  pupil: Observable<Pupil>;
  pupilObj: Pupil;

  classes: Observable<SchoolClass[]>;
  classesObj;

  fullName: string;
  id: string;
  age: number;
  city: string;
  photo: string;
  schoolClass: SchoolClass;

  classTick: {};

  constructor(private service: PupilsService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.pupil = this.route.paramMap.pipe(
      switchMap(p =>
        this.service.getPupilById(p.get("id")
        )
      )
    )

    this.pupil.subscribe(p => this.pupilObj = p);

    this.fullName = this.pupilObj.fullname;
    this.id = this.pupilObj.id;
    this.age = this.pupilObj.age;
    this.city = this.pupilObj.city;
    this.photo = this.pupilObj.photo;
    this.schoolClass = this.pupilObj.schoolClass;

    this.classes = this.service.getClasses();
    this.classTick = { [this.schoolClass.id]: true }
  }

  applyChanges() {
    this.pupilObj.fullname = this.fullName;
    this.pupilObj.id = this.id;
    this.pupilObj.age = this.age;
    this.pupilObj.city = this.city;
    this.pupilObj.photo = this.photo;
    this.pupilObj.schoolClass = this.schoolClass

    this.pupil.pipe(map(p => this.pupilObj))
  }

  chooseClass(event) {
    this.classes.subscribe(c => this.schoolClass = c.find(sclass => sclass.id == event.target.value))
  }
}
