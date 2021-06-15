import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';

const routes: Routes = [
  { path: 'teachers', component: TeacherListComponent },
  { path: 'teachers/:id', component: EditTeacherComponent }
]

@NgModule({
  declarations: [
    TeacherListComponent,
    EditTeacherComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class TeachersModule { }
