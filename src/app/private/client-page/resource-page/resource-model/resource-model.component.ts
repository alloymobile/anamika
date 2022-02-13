import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-resource-model',
  templateUrl: './resource-model.component.html',
  styleUrls: ['./resource-model.component.css']
})
export class ResourceModelComponent implements OnInit {
  form: FormGroup;
  description:string;
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<ResourceModelComponent>,@Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      description: [this.description, []],
  });
  }

  close(){
    this.dialogRef.close();
  }

  save(){
    this.dialogRef.close(this.form.value);
  }
}
