import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    serverId: number= 12;
    serverName: String='Online';
   allowNewServer=false;
   serverCreationStatus="It's not created";
   serverKey="1234";
   serverStatus=false;
   servers = ["1","2"];
  constructor() { 
   setTimeout(() => {
     this.allowNewServer=true;   
   }, 2000);
 
  }

  ngOnInit(): void {
  }

  onClick()
  {
    this.serverStatus=true;
    this.servers.push(this.serverKey);
    return this.serverCreationStatus="It's created & key is " + this.serverKey;
  }

  onUpdateServerKey(event:Event)
  {
    this.serverKey=(<HTMLInputElement>event.target).value;
  }

}
