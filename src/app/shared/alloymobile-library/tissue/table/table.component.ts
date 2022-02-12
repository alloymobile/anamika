import { Component, Input, OnInit } from '@angular/core';
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

  constructor() {
  }

  ngOnInit(): void {
  }

  capitalize(s) {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  toString(val): string {
    return JSON.stringify(val);
  }
}
