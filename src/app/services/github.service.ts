import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  url: any = 'https://raw.githubusercontent.com/tanvir-ux/GoodNews/main/news.json'

  constructor(
    private http: HttpClient
  ) { }

  getGoodNews(): Observable<any> {
    return this.http.get<any>(this.url)
  }
}
