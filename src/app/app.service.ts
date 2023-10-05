import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Photo} from "./model/photo";
import {Video} from "./model/video";

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {
  }

  getAllVideos() {
    return this.http.get<Video[]>('http://localhost:8080/getAllVideos');
  }

  getAllPhotos() {
    return this.http.get<Photo[]>('http://localhost:8080/getAllPhotos');
  }
}
