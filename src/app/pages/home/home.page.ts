import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, MenuController, RefresherCustomEvent } from '@ionic/angular';
import { Article, INews } from 'src/app/interfaces/news.interface';
import { Loader } from 'src/app/shared/providers/loader/loader';
import { News } from 'src/app/shared/services/news/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  public news!: INews;
  public articles: Article[] = [];

  constructor(
    private newsSrv: News,
    private loaderProv: Loader,
    private menuCtrl: MenuController,
  ) {}

  async ngOnInit() {
    await this.loaderProv.preset({
      message: 'Please wait',
    });
    await this.getArticles();
    await this.loaderProv.dismiss();
  }

  async getArticles() {
    this.news = await this.newsSrv.getNews();
    this.articles = this.news.articles;
  }

  public async filterNews(filter: string) {
    await this.loaderProv.preset({
      message: 'Please wait',
    });
    this.news = await this.newsSrv.filterNews(filter);
    this.articles = this.news.articles;
    this.menuCtrl.close();
    await this.loaderProv.dismiss();
  }

  async refresh(event: RefresherCustomEvent) {
    await this.getArticles();
    event.target.complete();
  }

}
