import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pill } from 'src/app/shared/model/pill.model';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.css']
})
export class PillComponent implements OnInit {
  _pill: Pill = new Pill();

  @Input() set pill(pill: Pill){
    this._pill = pill;
  }

  @Output() output: EventEmitter<Pill> = new EventEmitter<Pill>();

  constructor() { }

  ngOnInit(): void {
  }

  onPillClicked(){
    this.output.emit(this._pill);
  }
}
