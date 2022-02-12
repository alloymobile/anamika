import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { appIcon } from 'src/app/shared/services/icons/icon.service';
import { Register } from './register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public _input: Register;
  registerForm: FormGroup;
  public icon = appIcon;

  @Input() set input(input: Register){
    this._input = input;
  };

  @Output() output: EventEmitter<Register> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this._input = new Register();
  }

  // convenience getter for easy access to form fields
  get formControl() {
    return this.registerForm.controls;
  }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required,Validators.pattern(
        "(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}"
      )]],
      reTypePassword:['', [Validators.required,Validators.pattern(
        "(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}"
      )]]
    },{ validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('reTypePassword').value
       ? null : {'mismatch': true};
  }

  registerClient(){
    if (this.registerForm.valid) {
      this._input.error ="";
      this._input.name = this.formControl.name.value
      this._input.email = this.formControl.email.value;
      this._input.password = this.formControl.password.value;
      this._input.showSpinner = true;
      this.output.emit(this._input);
    }else{
      this._input.error = "There are form errors please fix them"
      this._input.submitted = false;
    }
  }
}
