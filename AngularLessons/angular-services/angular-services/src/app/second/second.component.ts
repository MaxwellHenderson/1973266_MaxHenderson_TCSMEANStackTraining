import { Component, OnInit } from '@angular/core';
import { MyService } from '../mycustom.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
  msg: string = '';
  constructor() {}

  ngOnInit(): void {}

  fun1() {
    let obj = new MyService();
    this.msg = obj.sayHello();
  }
}
