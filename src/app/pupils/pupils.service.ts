import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";
import { iGetClasses, iGetPupils, SchoolClass } from '../app.model';
import { CLASSES } from '../dumm-data-classes';
import { PUPILS } from './dummy-data-pupils';
import { Pupil } from './pupils.model';

@Injectable({
  providedIn: 'root'
})
export class PupilsService implements iGetClasses, iGetPupils {

  constructor() { }
  getPupils(): Observable<Pupil[]> {
    return of(PUPILS)
  }
  getPupilById(id: string | number): Observable<Pupil> {
    return this.getPupils()
      .pipe(map(p => p.find(pupil => pupil.id === id + "")))
  }

  getClasses(): Observable<SchoolClass[]> {
    return of(CLASSES);
  }
}
