import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Website} from "../models/website";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebsitesService {

  constructor(private http: HttpClient) {}

  getWebsites(): Observable<Website[]> {
    return this.http.get<Website[]>("http://dkarlsso.com/data/websites.json");
  }
}
