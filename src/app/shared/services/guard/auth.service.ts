import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { DataService } from '../data/data.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  constructor(private dataService: DataService,private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.checkJwtToken()) {
        // token expired in so redirect to login page
        this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
        return false;
      } else {
        // logged in so return true
        return true;
      }
    // not logged in so redirect to login page
    this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
    return false;
  }
  checkJwtToken(): boolean {
    let tokenResponse = true;
    this.dataService.client.subscribe(client=>{
      if(client.token && client.token.length > 0){
        const decodeToken = this.getDecodedAccessToken(client.token);
        const decodeTokenDate = new Date(decodeToken.exp * 1000);
        const tokenExpiry = new Date(decodeTokenDate.setMinutes(decodeTokenDate.getMinutes() - 2));
        const currentDate = new Date();
        if (currentDate > tokenExpiry) {
          console.log('Token is expired');
          tokenResponse = true;
        } else {
          console.log('valid token');
          tokenResponse = false;
        }
      } else {
        console.log('Token is not present');
        tokenResponse = true;
      }
    });
    return tokenResponse;
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }


}
