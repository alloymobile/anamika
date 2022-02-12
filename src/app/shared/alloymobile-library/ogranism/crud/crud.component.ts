import { Component, Input, OnInit } from '@angular/core';
import { Drawing } from 'src/app/shared/model/drawing.model';
import { appIcon } from '../../../services/icons/icon.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
	icon = appIcon;
  _drawings: Drawing[] = [];
  @Input() set drawings(drawings: Drawing[]){
    this._drawings = drawings;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
