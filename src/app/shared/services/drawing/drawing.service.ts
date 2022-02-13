import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Drawing } from '../../model/drawing.model';
import { AuthService } from '../guard/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DrawingService {
  drawingApiUrl: string;
  constructor(private http: HttpClient
    , private authService: AuthService) {
      this.drawingApiUrl = environment.drawingApiUrl;
  }

  createHeadder(token?: string): HttpHeaders {
    if(token){
      return new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Credentials', 'true')
      .set(
        'Access-Control-Allow-Methods',
        'HEAD, GET, POST, PUT, DELETE, PATCH, OPTIONS'
      )
      .set('Access-Control-Max-Age', '3600')
      .set('Authorization', 'Bearer ' + token);
    }else{
      return new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Credentials', 'true')
      .set(
        'Access-Control-Allow-Methods',
        'HEAD, GET, POST, PUT, DELETE, PATCH, OPTIONS'
      )
      .set('Access-Control-Max-Age', '3600');
    }
  }

  getDrawings(){
    const apiEndPoint = this.drawingApiUrl + '/v1/drawings';
    return this.http
      .get(apiEndPoint,{ headers: this.createHeadder() })
      .pipe(catchError( error => throwError(()=> new Error(error))));
  }

  addDrawing(data: Drawing,token: string){
    const apiEndPoint = this.drawingApiUrl + '/api/v1/drawings';
    if (this.authService.checkJwtToken()) {
      throw throwError(()=> new Error('unAuthorized'));
    }else{
        return this.http.post(apiEndPoint, data, { headers: this.createHeadder(token) })
        .pipe(catchError( error => throwError(()=> new Error(error))));
    }
  }


  //update drawing
  updateDrawing(data: Drawing,token: string) {
    let apiEndPoint = this.drawingApiUrl + '/api/v1/drawings' + '/' + data.id;
    if (this.authService.checkJwtToken()) {
      throw throwError(()=> new Error('unAuthorized'));
    } else {
      return this.http.put(apiEndPoint, data, { headers: this.createHeadder(token) });
    }
  }

  //delete drawing
  deleteDrawing(data: Drawing,token: string) {
    let apiEndPoint = this.drawingApiUrl + '/api/v1/drawings' + '/' + data.id;
    if (this.authService.checkJwtToken()) {
      throw throwError(()=> new Error('unAuthorized'));
    } else {
      return this.http.delete(apiEndPoint, { headers: this.createHeadder(token) });
    }
  }
}
