import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Drawing, DrawingAction } from 'src/app/shared/model/drawing.model';
import { appIcon } from 'src/app/shared/services/icons/icon.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
	icon = appIcon;
  //Holds the list data fetch from server
  _tableModel = [];
  @Input() classes = 'table';
  @Input() set tableModel(tableModel){
    this._tableModel = tableModel;
  }
  @Output() output: EventEmitter<Drawing> = new EventEmitter<Drawing>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClicked(drawing,action: DrawingAction){
    let data = new Drawing(drawing);
    data.action = action;
    this.output.emit(data);
  }

  capitalize(s) {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  toString(val): string {
    return JSON.stringify(val);
  }

  get action(): typeof DrawingAction {
    return DrawingAction;
  }
}
