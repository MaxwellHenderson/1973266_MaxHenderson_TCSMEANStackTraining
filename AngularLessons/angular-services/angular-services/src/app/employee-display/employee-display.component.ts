import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html',
  styleUrls: ['./employee-display.component.css'],
})
export class EmployeeDisplayComponent implements OnInit {
  employees: Array<Employee> = new Array();
  constructor(public empSer: EmployeeService) {}

  ngOnInit(): void {
    this.empSer
      .loadEmployeeDetails()
      .subscribe((result) => (this.employees = result));
  }
}
