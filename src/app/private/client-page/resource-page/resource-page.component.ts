import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Drawing } from 'src/app/shared/model/drawing.model';
import { DrawingService } from 'src/app/shared/services/drawing/drawing.service';
import { appIcon } from 'src/app/shared/services/icons/icon.service';

@Component({
  selector: 'app-resource-page',
  templateUrl: './resource-page.component.html',
  styleUrls: ['./resource-page.component.css']
})
export class ResourcePageComponent implements OnInit {
  drawings: Drawing[] = [];
  icon = appIcon;
  showSpinner = false;
  constructor(private drawingService: DrawingService) { }

  ngOnInit(): void {
    this.showSpinner = true;
    this.getDrawings();
  }

  getDrawings(){
    this.drawingService.getDrawings().pipe(first()).subscribe((res: any)=>{
      res.content.forEach(element => {
        this.drawings.push(new Drawing(element));
      });
      this.showSpinner = false;
    });
  }

}
