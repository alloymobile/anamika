import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Drawing } from 'src/app/shared/model/drawing.model';
import { appIcon } from 'src/app/shared/services/icons/icon.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
	icon = appIcon;
  drawing: Drawing = new Drawing();
  @Output() output: EventEmitter<Drawing> = new EventEmitter<Drawing>();
  constructor() {
  }

  ngOnInit(): void {
  }

  onAddClicked(){
    this.output.emit(this.drawing);
  }

}
