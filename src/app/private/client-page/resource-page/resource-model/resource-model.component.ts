import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { first } from 'rxjs';
import { Drawing } from 'src/app/shared/model/drawing.model';
import { FileService } from 'src/app/shared/services/file/file.service';
import { appIcon } from 'src/app/shared/services/icons/icon.service';

@Component({
  selector: 'app-resource-model',
  templateUrl: './resource-model.component.html',
  styleUrls: ['./resource-model.component.css']
})
export class ResourceModelComponent implements OnInit {
  drwaingForm: FormGroup;
  _drawing: Drawing = new Drawing();
  imageForm: FormData = new FormData();
  imageUrl = "";
  showSpinner = false;
  icon = appIcon;
  constructor(private formBuilder: FormBuilder
    , public dialogRef: MatDialogRef<ResourceModelComponent>
    , @Inject(MAT_DIALOG_DATA) data
    , private fileService: FileService) { }

  // convenience getter for easy access to form fields
  get formControl() {
    return this.drwaingForm.controls;
  }

  ngOnInit(): void {
    this.createDrawingForm();
  }

  createDrawingForm() {
    this.drwaingForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      imageUrl: [{value:'',disabled:true}, [Validators.required]],
      description: ['', [Validators.required]],
      client: ['', [Validators.required]]
    });
  }

  close(){
    this.dialogRef.close();
  }

  save(){
    if (this.drwaingForm.valid) {
      // this._login.error ="";
      this._drawing.id = "";
      this._drawing.name = this.formControl.name.value;
      this._drawing.imageUrl = this.formControl.imageUrl.value;
      this._drawing.description = this.formControl.description.value;
      this._drawing.client = this.formControl.client.value;
      // this._login.showSpinner = true;
      this.dialogRef.close(this._drawing);
    }else{
      // this._login.error = "There are form errors please fix them"
      // this._login.submitted = false;
    }
  }

  //called to create form data when there is a file
  onFileChange(event) {
    this.showSpinner = true;
    let file = event.target.files[0];
    let fileName = event.target.files[0].name;
    this.imageForm.append('file', file, fileName);
    this.fileService.uploadFile(this.imageForm).pipe(first()).subscribe((res:any)=>{
      this.showSpinner = false;
      this.imageUrl = res.imageUrl;
    },error=>{
      this.showSpinner = false;
    });
  }
}
