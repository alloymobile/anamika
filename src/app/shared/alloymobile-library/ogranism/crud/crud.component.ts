import { Component, OnInit } from '@angular/core';
import { appIcon } from '../../../services/icons/icon.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
	public icon = appIcon;
  constructor() { }

  ngOnInit(): void {
  }

}
