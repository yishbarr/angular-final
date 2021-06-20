import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { Pupil } from './pupils/pupils.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-final';

  pupils: Observable<Pupil[]>;
  pupilCount: number;
  constructor(private service: AppService) { }

  ngOnInit() {
    this.pupils = this.service.getPupils();
    this.pupils.subscribe(p => this.pupilCount = p.length)
  }
}
