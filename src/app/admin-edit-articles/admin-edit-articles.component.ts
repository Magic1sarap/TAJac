import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-edit-articles',
  templateUrl: './admin-edit-articles.component.html',
  styleUrls: ['./admin-edit-articles.component.scss']
})
export class AdminEditArticlesComponent implements OnInit {

  header: string;
  text: string;
  tag: string;
  image: string;
  articles: any;
  id:any;


  



  constructor(private ArticleService: ArticleService, private router: ActivatedRoute) {

  }


  ngOnInit() {

    this.articles = this.router.params.subscribe(params => {
      this.header = params['header'];
      this.text = params['text'];
      this.tag = params['tag'];
      this.image = params['image'];
      this.id=params['_id'];
      // this.ArticleService.getArticlebyId(this.header).subscribe(articles => {
      //   this.articles = articles;
      console.log("id: "+ this.id)
      console.log("id: "+ this.header)
      }

      );


    };
  

  onChangeHeaderUpdate(value) {
    this.header = value
  }
  onChangeTextUpdate(value) {
    this.text = value
  }
  onChangeTagUpdate(value) {
    this.tag = value
  }
  onChangeImageUpdate(value) {
    this.image = value
  }


  
  // update() {
  //   this.ArticleService.updateArticle(this.articleUpdate).subscribe(result => {}
  //   )}

  onSubmit() {

      console.log("id: "+ this.id)
      console.log("header: "+ this.header)
      console.log("tag: "+ this.tag)
      console.log("text: "+ this.text)
      console.log("image: "+ this.image)
    this.ArticleService.updateArticle(this.id, this.text,this.image, this.header, this.tag ).subscribe(result => {
      alert("Article "+ this.header+ " Has been updated !")
    });
  }
}
