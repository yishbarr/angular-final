import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesTableComponent } from './employees-table/employees-table.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'employees', component: EmployeesTableComponent },
]

@NgModule({
  declarations: [
    EmployeesTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class EmployeesModule { }
