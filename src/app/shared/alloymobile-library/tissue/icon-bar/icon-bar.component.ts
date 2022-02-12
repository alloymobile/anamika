import {Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconBar } from './icon-bar.model';
@Component({
  selector: 'app-icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.css']
})
export class IconBarComponent implements OnInit {
  _iconBar: IconBar[];
  @Input() set iconBar(iconBar: IconBar[]) {
  	this._iconBar = iconBar;
  }

  @Output() output: EventEmitter<IconBar> = new EventEmitter<IconBar>();;
  constructor() {}

  ngOnInit(): void {
  }
}
