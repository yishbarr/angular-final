import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pupil } from '../pupils.model';
import { PupilsService } from '../pupils.service';

@Component({
  selector: 'app-pupils-tabel',
  templateUrl: './pupils-tabel.component.html',
  styleUrls: ['./pupils-tabel.component.css']
})
export class PupilsTabelComponent implements OnInit {

  list: Observable<Pupil[]>;
  gradesRow = {};
  constructor(private service: PupilsService) { }

  ngOnInit(): void {
    this.list = this.service.getPupils();
  }

  gradesAvgColour(pupil) {
    let sum = 0;
    pupil.grades.forEach(g => sum += Number(g.grade));
    let avg = Math.round(sum / pupil.grades.length);
    let colour = avg < 65 ? "bg-danger" : "bg-primary";
    this.gradesRow = { ...this.gradesRow, [pupil.id]: { colour: colour, avg: avg } }
    return this.gradesRow[pupil.id].colour;
  }

}
