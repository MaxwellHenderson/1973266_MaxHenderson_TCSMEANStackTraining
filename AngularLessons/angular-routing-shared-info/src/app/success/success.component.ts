import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent implements OnInit {
  details?: string;

  constructor(private activeRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRouter.params.subscribe((v) => {
      console.log(v);
      console.log(v.user);
      this.details = v.user;
    });
  }
}
