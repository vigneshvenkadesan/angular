import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
  value= false;
  log=[];


  constructor() { }

  ngOnInit(): void {
  }
  onClick()
  {
    this.value=!this.value;
    this.log.push(this.log.length+1);
   
  }

}
