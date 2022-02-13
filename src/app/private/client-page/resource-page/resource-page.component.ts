import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Drawing, DrawingAction } from 'src/app/shared/model/drawing.model';
import { DrawingService } from 'src/app/shared/services/drawing/drawing.service';
import { appIcon } from 'src/app/shared/services/icons/icon.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ResourceModelComponent } from './resource-model/resource-model.component';
import { DataService } from '../../../shared/services/data/data.service'
import { Client } from 'src/app/shared/model/client.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resource-page',
  templateUrl: './resource-page.component.html',
  styleUrls: ['./resource-page.component.css']
})
export class ResourcePageComponent implements OnInit {
  drawings: Drawing[] = [];
  icon = appIcon;
  showSpinner = false;
  client: Client = new Client();
  constructor(private drawingService: DrawingService
    , private dataService: DataService
    , private router: Router
    , private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.dataService.client.subscribe(client=> this.client = client);
    this.getDrawings();
  }

  getDrawings(){
    this.showSpinner = true;
    this.drawings = [];
    this.drawingService.getDrawings().pipe(first()).subscribe((res: any)=>{
      res.content.forEach(element => {
        this.drawings.push(new Drawing(element));
      });
      this.showSpinner = false;
    });
  }

  openDialog(drawing: Drawing) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = drawing;
    const dialogRef = this.matDialog.open(ResourceModelComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((value: Drawing) => {
      this.showSpinner = true;
      if(value.action == DrawingAction.EDIT){
        this.drawingService.updateDrawing(value,this.client.token).pipe(first()).subscribe((res:any)=>{
          this.getDrawings();
          this.showSpinner = false;
        },error=>{
            this.router.navigate(['/login']);
        });
      }else if(value.action == DrawingAction.DELETE){
        this.drawingService.deleteDrawing(value,this.client.token).pipe(first()).subscribe((res:any)=>{
          this.getDrawings();
          this.showSpinner = false;
        },error=>{
            this.router.navigate(['/login']);
        });
      }else{
        this.drawingService.addDrawing(value,this.client.token).pipe(first()).subscribe((res:any)=>{
          this.getDrawings();
          this.showSpinner = false;
        },error=>{
            this.router.navigate(['/login']);
        });
      }
    });
  }

  onCrudClicked(drawing: Drawing){
    this.openDialog(drawing);
  }
}
