import { Component, OnInit } from '@angular/core';
import { Employee } from '../employees.model';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})
export class EmployeesTableComponent implements OnInit {

  list;
  wagesRow = {}
  constructor(private service: EmployeesService) { }

  ngOnInit(): void {
    this.list = this.service.getEmployees();
  }
  wagesColour(employee: Employee) {
    let wage = employee.hourlyWage * employee.hoursPerMonth;
    let colour = wage < 3000 ? "table-danger" : "table-primary";
    this.wagesRow = { ...this.wagesRow, [employee.id]: { colour: colour, wage: wage } }
    return this.wagesRow[employee.id].colour;
  }

}
