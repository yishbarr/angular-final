import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeesModule } from './employees/employees.module';
import { PupilsModule } from './pupils/pupils.module';
import { TeacherListComponent } from './teachers/teacher-list/teacher-list.component';
import { TeachersModule } from './teachers/teachers.module';

const routes: Routes = [
  { path: '', component: TeacherListComponent, pathMatch: "full" }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    TeachersModule,
    PupilsModule,
    EmployeesModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
