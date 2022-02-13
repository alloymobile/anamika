import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Drawing } from 'src/app/shared/model/drawing.model';
import { appIcon } from '../../../services/icons/icon.service';
import { SearchBar } from '../../tissue/search-bar/search-bar.model';
import { Crud } from './crud.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
	icon = appIcon;
  _drawings: Drawing[] = [];
  _crud: Crud = new Crud();
  @Output() output: EventEmitter<Crud> = new EventEmitter<Crud>();
  @Input() set drawings(drawings: Drawing[]){
    this._drawings = drawings;
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSearchClicked(search: SearchBar){
    this._crud.search = search;
    this.output.emit(this._crud);
  }
}
