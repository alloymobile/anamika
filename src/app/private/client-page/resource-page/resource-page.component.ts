import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Drawing } from 'src/app/shared/model/drawing.model';
import { DrawingService } from 'src/app/shared/services/drawing/drawing.service';
import { appIcon } from 'src/app/shared/services/icons/icon.service';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ResourceModelComponent } from './resource-model/resource-model.component';
import { Crud } from 'src/app/shared/alloymobile-library/ogranism/crud/crud.model';

@Component({
  selector: 'app-resource-page',
  templateUrl: './resource-page.component.html',
  styleUrls: ['./resource-page.component.css']
})
export class ResourcePageComponent implements OnInit {
  drawings: Drawing[] = [];
  icon = appIcon;
  showSpinner = false;
  constructor(private drawingService: DrawingService,private matDialog: MatDialog) { }

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

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(ResourceModelComponent, dialogConfig);
  }

  onCrudClicked(crud: Crud){
    if(crud.search.add){
      this.openDialog();
    }
  }
}
