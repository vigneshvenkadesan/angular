import { Component, OnInit } from '@angular/core';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  status = '';
  constructor() {
    this.status = Math.random() >0.5 ? 'online': 'offline' ;

   }

  ngOnInit(): void {
  }

  getColor()
  {
    return this.status === 'online'?'green':'red';
  }
}
