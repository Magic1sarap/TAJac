import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MDBModalService } from 'angular-bootstrap-md';


@Component({
  selector: 'app-admin-article',
  templateUrl: './admin-article.component.html',
  styleUrls: ['./admin-article.component.scss']
})
export class AdminArticleComponent implements OnInit {

  id: number;
  articles: any = [];
 

  constructor(private ArticleService: ArticleService, private router: ActivatedRoute, private router1: Router, private modalService: MDBModalService) {
    this.getAllArticle();
  }

  ngOnInit() {

  }
  getAllArticle() {
    this.ArticleService.getAllArticle().subscribe(articles => {
      this.articles = articles;
    });
  }
  // open(content){
  //   this.modalService.open(content);
  // }
  delete(id) {
    this.ArticleService.deleteArticle(id).subscribe(result => {
      this.getAllArticle();
    });
  }




}
