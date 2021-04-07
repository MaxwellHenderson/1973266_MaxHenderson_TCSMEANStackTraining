import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css'],
})
export class Child4Component implements OnInit {
  names: Array<string> = new Array();

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  displayNames() {
    this.names = this.sharedService.getNames();
  }
}
