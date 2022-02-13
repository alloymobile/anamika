import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  fileApiUrl = "";
  constructor(private http: HttpClient) {
    this.fileApiUrl = environment.imageApiUrl;
  }

  uploadFile(file: FormData){
    const fileApiUrl = this.fileApiUrl + "/v1/thumbnail"
    return this.http.post(fileApiUrl, file)
    .pipe(catchError( error => throwError(()=> new Error(error))));
  }
}
