import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  _drawing: Drawing = new Drawing();
  @Output() output: EventEmitter<Drawing> = new EventEmitter<Drawing>();
  @Input() set drawings(drawings: Drawing[]){
    this._drawings = drawings;
    // this.items = order.items.map(({id,name,imageUrl,quantity,price})=>{
    //   return {Slno: id, name: name ,image: imageUrl, quantity : quantity, price: 'CA$ '+quantity * price};
    // }));
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSearchClicked(search: Drawing){
    this._drawing = search;
    this.output.emit(this._drawing);
  }

  onTableClicked(data: Drawing){
    this._drawing = data;
    this.output.emit(this._drawing);
  }
}
