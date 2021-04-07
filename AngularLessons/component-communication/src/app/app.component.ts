import { Component, ViewChild } from '@angular/core';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'component-communication';
  parentName: string = '';
  childAge?: number;

  @ViewChild(Child2Component) //This injects the Child2 reference
  child2?: Child2Component;

  childDesg?: string;

  passName(name: string) {
    this.parentName = name;
  }
  products: Array<string> = new Array();
  addProduct(productName: any) {
    this.products.push(productName);
  }

  callChild2Function() {
    this.child2?.child2Fun();
    this.childDesg = this.child2?.desg;
  }
}
