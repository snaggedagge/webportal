import { Component } from '@angular/core';
import {Website} from "./models/website";
import {WebsitesService} from "./services/websites.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  websites: Website[] = [];

  constructor(private websiteService: WebsitesService) { }

  ngOnInit(): void {
    this.websiteService.getWebsites()
      .subscribe(websites => this.websites = websites);
  }

  calculateDiff(dateSent:Date): string {
    let currentDate = new Date();
    dateSent = new Date(dateSent);
    let diffMs = (currentDate.getTime() - dateSent.getTime());
    let diffMinutes = diffMs/(1000*60);
    let diffHours = diffMinutes/60;
    let diffDays = diffHours/24;

    if (diffDays > 1) {
      return diffDays.toFixed(0) + ' days';
    }
    if (diffHours > 1) {
      return diffHours.toFixed(0) + ' hours';
    }
    return diffMinutes.toFixed(0) + ' minutes';
  }
}
