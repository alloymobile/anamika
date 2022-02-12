import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Drawing } from 'src/app/shared/model/drawing.model';

@Component({
  selector: 'app-card-thumb',
  templateUrl: './card-thumb.component.html',
  styleUrls: ['./card-thumb.component.css']
})
export class CardThumbComponent implements OnInit {
  _card: Drawing = new Drawing();
  @Input() set card(card: Drawing){
    this._card = card;
  }

  @Output() output: EventEmitter<Drawing> = new EventEmitter<Drawing>();

  constructor() { }

  ngOnInit(): void {
  }

  onCardSelect(){
    this.output.emit(this._card);
  }
}
