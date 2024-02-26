import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  private symbols: number = 250;
  // @input() article: Article;
  // @input() articleDesc: string;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = true;
  imageIsShown: boolean = true;
  imageButtonTitle: string = "Show Image";
  constructor() {
    this.articleDescLen = 0;
    this.descToShow = '';
  }
}
