import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Video} from "./model/video";
import {Photo} from "./model/photo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public videos: any;
  public photos: any;

  constructor(private appService: AppService, public sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.loadVideos();
    this.loadPhotos();
  }

  public loadVideos(): void {
    this.appService.getAllVideos().subscribe((response) => {
      let data = response.map((video: Video) => {
        return Object.assign({}, video, {
          embedded: this.sanitizer.bypassSecurityTrustResourceUrl(
            video.link.replace('watch?v=', 'embed/')
          ),
        });
      });
      this.videos = data;
    });
  }

  public loadPhotos(): void {
    this.appService.getAllPhotos().subscribe((response: Photo[]) => {
      this.photos = response;
    });
  }
}
