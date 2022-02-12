import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { DrawingService } from 'src/app/shared/drawing/drawing.service';
import { Client } from 'src/app/shared/model/client.model';
import { Drawing } from 'src/app/shared/model/drawing.model';
import { DataService } from 'src/app/shared/services/data/data.service';
import { appIcon } from 'src/app/shared/services/icons/icon.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  drawings: Drawing[] = [];
  client: Client = new Client();
  icon = appIcon;
  showSpinner = false;
  constructor(private drawingService: DrawingService, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.showSpinner = true;
    this.getDrawings();
    this.dataService.client.subscribe(client=> this.client = client);
  }

  getDrawings(){
    this.drawingService.getDrawings().pipe(first()).subscribe((res: any)=>{
      res.content.forEach(element => {
        this.drawings.push(new Drawing(element));
      });
      this.showSpinner = false;
    });
  }

  onDrawingSelect(drawing: Drawing){
    this.router.navigate(['drawing/',drawing.id],{state:{data: drawing}})
  }
}
