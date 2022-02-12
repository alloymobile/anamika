import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { appIcon } from 'src/app/shared/services/icons/icon.service';

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css']
})
export class ItemUpdateComponent implements OnInit {
  icon = appIcon
  _quantity: number = 0;
  _maxQuantity: number = 1;
  size: SizeProp = "sm";

  @Input() set quantity(quantity: number){
    this._quantity = quantity;
  }

  @Input() set maxQuantity(quantity: number){
    this._maxQuantity = quantity;
  }

  @Output() output: EventEmitter<number> = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    this._quantity >= this._maxQuantity ? this._maxQuantity : this._quantity++;
    this.output.emit(this._quantity);
  }

  onSubtract(){
    this._quantity > 0 ? this._quantity-- : 0;
    this.output.emit(this._quantity);
  }
}
