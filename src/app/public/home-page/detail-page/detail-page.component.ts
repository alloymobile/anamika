import { Component, OnInit } from '@angular/core';
import { Drawing } from 'src/app/shared/model/drawing.model';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  drawing: Drawing = new Drawing();
  constructor() { }
  ngOnInit(): void {
    this.drawing = new Drawing(history.state.data);
  }
}
