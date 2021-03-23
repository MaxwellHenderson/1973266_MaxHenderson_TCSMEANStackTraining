import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  fname:string="Max"
  lname:string="Henderson"
  count:number=0;
  age: number=21;
  skillName: any;

  constructor() { }

  ngOnInit(): void {
  }

  fun():void{
    console.log("Event fired..."+this.count)
    this.count ++;
  }
  changeAge():void{
    this.age = 25;
  }
  addSkill(skill:any):void{
    this.skillName = skill
  }
}
