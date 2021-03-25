import { Component, OnInit } from '@angular/core';
import { MyService } from '../mycustom.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  msg: string = '';
  constructor() {}

  ngOnInit(): void {}

  fun1() {
    let obj = new MyService();
    this.msg = obj.sayHello();
  }
}
