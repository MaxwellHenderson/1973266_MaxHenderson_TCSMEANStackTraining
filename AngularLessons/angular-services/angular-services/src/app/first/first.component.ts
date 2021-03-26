import { Component, OnInit } from '@angular/core';
import { Fake } from '../fake.model';
import { FakeService } from '../fake.service';
import { MyService } from '../mycustom.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  // providers: [FakeService], //register FakeService on the COMPONENT level
})
export class FirstComponent implements OnInit {
  msg: string = '';
  msg2: string = '';
  msg3: string = '';

  constructor(public serviceName: FakeService) {} //Passing in FakeService is DI: pulling the object from the container

  fakeData: Array<Fake> = [];

  ngOnInit(): void {
    this.serviceName.loadFakeData().subscribe((data) => (this.fakeData = data));
  }

  fun1() {
    let obj = new MyService();
    if (this.msg == '') this.msg = this.serviceName.sayHello();
    else this.msg = '';
  }

  display() {
    if (this.msg2 == '') this.msg2 = this.serviceName.sayHello();
    else this.msg2 = '';
  }
}
