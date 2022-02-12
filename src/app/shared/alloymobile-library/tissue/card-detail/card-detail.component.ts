import { Component, Input, OnInit} from '@angular/core';
import { Drawing } from 'src/app/shared/model/drawing.model';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  _card: Drawing = new Drawing();

  @Input() set card(card: Drawing){
    this._card = card;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
