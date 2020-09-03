import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles:[`p{

    padding: 20px;
    background-color: gray;
    border: 1px solid yellow;

    }`]
})
export class AppComponent 
{
  title="my-dream-app";
}
