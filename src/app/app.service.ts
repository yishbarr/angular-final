import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { iGetPupils } from './app.model';
import { PUPILS } from './pupils/dummy-data-pupils';
import { Pupil } from './pupils/pupils.model';

@Injectable({
  providedIn: 'root'
})
export class AppService implements iGetPupils {

  constructor() { }
  getPupils(): Observable<Pupil[]> {
    return of(PUPILS);
  }

}
