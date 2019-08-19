import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-showcase',
  templateUrl: './article-showcase.component.html',
  styleUrls: ['./article-showcase.component.scss']
})
export class ArticleShowcaseComponent implements OnInit {

  header: string;
  text: string;
  tag: string;
  image: string;
  articles: any;

  constructor(private ArticleService: ArticleService, private router: ActivatedRoute) { }

  ngOnInit() {

    this.articles = this.router.params.subscribe(params => {
      this.header = params['header'];
      this.text = params['text'];
      this.tag = params['tag'];
      this.image = params['image'];
      this.ArticleService.getArticlebyId(this.header).subscribe(articles => {
      this.articles = articles;
        // console.log("articles: " +this.articles[0].text)
        // console.log("articles: " +JSON.stringify(this.articles[0].text))
      }

      );


    });
  }
  getAllArticle() {
    this.ArticleService.getAllArticle().subscribe(articles => {
      this.articles = articles;
    });
  }

}
