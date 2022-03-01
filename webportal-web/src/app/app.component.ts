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

  calculateDiff(dateSent:Date){
    let currentDate = new Date();
    dateSent = new Date(dateSent);
    var diffMs = (currentDate.getTime() - dateSent.getTime());
    let diffMins = Math.floor(((diffMs % 86400000) % 3600000) / 60000); // minutes
    console.log(diffMins)
    return diffMs/(1000*60);
  }
}
