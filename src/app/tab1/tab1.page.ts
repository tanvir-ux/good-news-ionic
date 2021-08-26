import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';
import { Observable } from 'rxjs';
import { Browser } from '@capacitor/browser';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data: Observable<any>

  constructor(
    private githubService: GithubService) { }

  ionViewDidEnter() {
    this.githubService.getGoodNews().subscribe((resp: any) => {
      this.data = resp;
    })
  }

  openBrowser(link) {    
     Browser.open({url: link})
  }  
}
