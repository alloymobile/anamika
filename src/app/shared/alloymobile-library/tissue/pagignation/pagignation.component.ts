import { Component, OnInit } from '@angular/core';
import { Active, Page } from 'src/app/shared/model/metadata.model';

@Component({
  selector: 'app-pagignation',
  templateUrl: './pagignation.component.html',
  styleUrls: ['./pagignation.component.css']
})
export class PagignationComponent implements OnInit {
  //Select the active table
  active: Active;
  //Page data
  page: Page;

  constructor() {
    this.page = new Page();
    this.active = new Active();
   }

  ngOnInit(): void {
  }

}
