import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getAllVideos() {
    return this.http.get<any>('http://localhost:8080/getAllVideos');
  }

  getAllPhotos() {
    return this.http.get<any>('http://localhost:8080/getAllPhotos');
  }
}
