import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Teacher } from '../teachers.model';
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  list: Observable<Teacher[]>;
  constructor(private service: TeachersService) { }

  ngOnInit(): void {
    this.list = this.service.getTeachers();
  }

}
