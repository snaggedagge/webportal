import { Component } from '@angular/core';
import {Website} from "./models/website";
import {WebsitesService} from "./services/websites.service";
import {Address} from "./models/address";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  websites: Website[] = [];
  address: Address | undefined;

  constructor(private websiteService: WebsitesService) { }

  ngOnInit(): void {
    this.websiteService.getWebsites().subscribe(websites => this.websites = websites);
    this.websiteService.getIpAddress().subscribe(address => this.address = address);
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

  getLinkURL(website: Website): string {
    if (this.address) {
      const url = website.websiteLink.replace('https://', '').replace('http://', '');
      // If URL is a IP address and the same we originate from (Eg. local network), we must use the local IP instead
      return url === this.address.ip ? website.localWebsiteLink : website.websiteLink;
    }
    else {
      return website.websiteLink;
    }
  }
}
