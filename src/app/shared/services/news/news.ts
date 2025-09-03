import { Injectable } from '@angular/core';
import { Http } from '../../providers/http/http';
import { environment } from 'src/environments/environment';
import { INews } from 'src/app/interfaces/news.interface';

@Injectable({
  providedIn: 'root'
})
export class News {

  private apiUrl = environment.NEWSAPI;
  private apiKey = environment.API_KEY;

  constructor(private httpProv: Http) {}

  getNews() {
    return this.httpProv.get<INews>(`${this.apiUrl}/top-headlines?category=general&apiKey=${this.apiKey}`);
  }

  filterNews(category: string) {
    return this.httpProv.get<INews>(`${this.apiUrl}/top-headlines?category=${category}&apiKey=${this.apiKey}`);
  }
  
}
