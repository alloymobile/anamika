import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../../alloymobile-library/ogranism/login/login.model';
import { Register } from '../../alloymobile-library/ogranism/register/register.model';
import { Client } from '../../model/client.model';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  headers: HttpHeaders;
  authHeaders: HttpHeaders;
  clientApiUrl: string;
  constructor(private http: HttpClient
    , private router: Router
    , private dataService: DataService) {
      let token = '';
      this.dataService.client.subscribe(client=> token = client.token);
      this.headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Credentials', 'true')
      .set(
        'Access-Control-Allow-Methods',
        'HEAD, GET, POST, PUT, DELETE, PATCH, OPTIONS'
      )
      .set('Access-Control-Max-Age', '3600');

      this.clientApiUrl = environment.clientApiUrl;

  }

  //  getAccountDetail(){
  //   let apiEndPoint = this.apiEndPoint + '/api/v1/client/'+this.getClientId();
  //   if (this.checkJwtToken()) {
  //     this.router.navigate(['/main']);
  //   } else {
  //     this.addTokenInHeader();
  //     return this.http
  //       .get(apiEndPoint,{ headers: this.headers });
  //   }
  //  }

  //Login user
  loginUser(user: Login): Observable<Client> {
    const apiEndPoint = this.clientApiUrl + '/v1/clients/signin';
    return this.http
      .post(apiEndPoint, Login.createDTO(user),{ headers: this.headers })
      .pipe(map((res: Client) => res), catchError( error => throwError(()=> new Error(error))));
  }

  //Register user
  registerUser(user: Register) {
    let apiEndPoint = this.clientApiUrl + '/v1/clients/signup';
    return this.http
      .post(apiEndPoint, user,{ headers: this.headers })
      .pipe(map((res: Client) => res), catchError( error => throwError(()=> new Error(error))));
  }

  // //Activate new user
  // verifyUser(code: String ){
  //   let apiEndPoint = this.apiEndPoint + '/client/register/verify?code='+code;
  //   return this.http
  //     .get(apiEndPoint,{ headers: this.headers });
  // }

  // //Send reset email link
  // forgetPassword(client: Client){
  //   let apiEndPoint = this.apiEndPoint + '/client/reset?email='+client.email;
  //   return this.http
  //     .get(apiEndPoint,{ headers: this.headers });
  // }

  // //Reset user password
  // resetPasswordUser(user: Client, code: string) {
  //   let apiEndPoint = this.apiEndPoint + '/client/reset/verify?code='+code;
  //   return this.http
  //     .post(apiEndPoint, Client.createDTO(user),{ headers: this.headers });
  // }

  // //GetUserDetails secure
  // getUserDetailsByEmail(client: Client){
  //   let apiEndPoint = this.apiEndPoint + '/api/v1/client?email='+client.email;
  //   if (this.checkJwtToken()) {
  //     this.router.navigate(['/main']);
  //   } else {
  //     this.addTokenInHeader();
  //     return this.http
  //       .get(apiEndPoint,{ headers: this.headers });
  //   }
  // }

}
