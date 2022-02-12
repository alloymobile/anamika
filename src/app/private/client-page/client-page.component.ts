import { Component, OnInit } from '@angular/core';
import { Pill } from 'src/app/shared/model/pill.model';
import sidebardb from "./client-sidebar.json"
@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {
  pills: Pill[] = [];
  constructor() {
    sidebardb.content.forEach(c=>this.pills.push(new Pill(c)));
   }

  ngOnInit(): void {
  }

}
