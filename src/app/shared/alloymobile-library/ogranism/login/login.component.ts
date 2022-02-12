import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { appIcon } from 'src/app/shared/services/icons/icon.service';
import { Login } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  _login: Login = new Login();
  loginForm: FormGroup;
	icon = appIcon;

  @Input() set login(login: Login){
    this._login = login;
  };

  @Output() output: EventEmitter<Login> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
  }

  // convenience getter for easy access to form fields
  get formControl() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  loginClient(){
    if (this.loginForm.valid) {
      this._login.error ="";
      this._login.email = this.formControl.email.value;
      this._login.password = this.formControl.password.value;
      this._login.showSpinner = true;
      this.output.emit(this._login);
    }else{
      this._login.error = "There are form errors please fix them"
      this._login.submitted = false;
    }
  }
}
