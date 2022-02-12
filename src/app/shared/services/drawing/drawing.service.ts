import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class DrawingService {
  headers: HttpHeaders;
  authHeaders: HttpHeaders;
  drawingApiUrl: string;
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

      this.drawingApiUrl = environment.drawingApiUrl;

  }

  getDrawings(){
    const apiEndPoint = this.drawingApiUrl + '/v1/drawings';
    return this.http
      .get(apiEndPoint,{ headers: this.headers })
      .pipe(catchError( error => throwError(()=> new Error(error))));
  }
}
