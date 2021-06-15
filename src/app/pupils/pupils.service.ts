import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from "rxjs/operators"
import { PUPILS } from './dummy-data-pupils';

@Injectable({
  providedIn: 'root'
})
export class PupilsService {

  constructor() { }
  getPupils() {
    return of(PUPILS)
  }
  getPupilById(id: string | number) {
    return this.getPupils()
      .pipe(map(p => p.find(pupil => pupil.id === id + "")))
  }
}
