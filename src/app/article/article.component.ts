import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  articles: any = [];
  public article: any = {
    header:'',
    text:'',
    tag:'',
    image:''
  }

  constructor(private ArticleService: ArticleService) {
    this.getAllArticle();
   }

  ngOnInit() {
  }
  getAllArticle(){
    this.ArticleService.getAllArticle().subscribe(articles => {
      this.articles = articles;
    });
  }

}
