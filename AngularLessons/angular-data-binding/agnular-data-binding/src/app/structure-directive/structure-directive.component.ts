import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {

  showFlag: boolean = false;
  backgroundColor: string = "blue"
  stdNames:Array<string>=["Bill","Sally","Frank"]
  skillNames: Array<any> = new Array()
  
  emp: Employee = new Employee(100, "Ravi", 12000)
  employees: Array<Employee> = new Array();

  constructor() {
    let emp1 = new Employee(1, "Bill", 1000)
    let emp2 = new Employee(2, "Frank", 2000)
    let emp3 = new Employee(3, "Steve", 3000)
    let emp4 = new Employee(4, "Mary", 4000)
    this.employees.push(emp1)
    this.employees.push(emp2)
    this.employees.push(emp3)
    this.employees.push(emp4)
    
  }

  ngOnInit(): void {
  }

  showHide(): void{
    this.showFlag = !this.showFlag

  }

  addSkillName(name: any) {
    this.skillNames.push(name);
  }
}
