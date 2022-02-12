export class Register{
  name: string;
  email: string;
  password: string;
  retypePassword: string;
  submitted: boolean;
  error: string;
  showSpinner: boolean;
  constructor(response?: any){
      if(response){
          this.name = response.firstName ?  response.firstName : "";
          this.email = response.email ? response.email : "";
          this.password = response.password ? response.password : "";
          this.retypePassword = response.retypePassword ? response.retypePassword : "";
          this.submitted = response.submitted ? response.submitted : false;
          this.error = response.error ? response.error : "";
          this.showSpinner = response.showSpinner ? response.showSpinner : false;
      }else{
          this.name = "";
          this.email = "";
          this.password = "";
          this.retypePassword = "";
          this.submitted = false;
          this.error = "";
          this.showSpinner = false;
      }
  }
}
