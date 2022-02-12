import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Drawing } from 'src/app/shared/model/drawing.model';

@Component({
  selector: 'app-card-gallery',
  templateUrl: './card-gallery.component.html',
  styleUrls: ['./card-gallery.component.css']
})
export class CardGalleryComponent implements OnInit {
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
