export class Login{
  email: string;
  password: string;
  submitted: boolean;
  error: string;
  rememberMe: boolean;
  showSpinner: boolean;
  register: boolean;
  forget: boolean;

  static createDTO(login: Login){
    return {
        email: login.email,
        password: login.password
    };
}

  constructor(response?: any){
    if(response){
      this.email = response.email ? response.email : "";
      this.password = response.password ? response.password : "";
      this.submitted = response.submitted ? response.submitted : false;
      this.error = response.error ? response.error : "";
      this.rememberMe = response.rememberMe ? response.rememberMe : false;
      this.showSpinner = response.showSpinner ? response.showSpinner : false;
      this.register = response.register ? response.register : false;
      this.forget = response.forget ? response.forget : false;
    }else{
      this.email = "";
      this.password = "";
      this.submitted = false;
      this.error = "";
      this.rememberMe = false;
      this.showSpinner = false;
      this.register = false;
      this.forget = false;
    }
  }
}
