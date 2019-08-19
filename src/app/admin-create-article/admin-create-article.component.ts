import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-create-article',
  templateUrl: './admin-create-article.component.html',
  styleUrls: ['./admin-create-article.component.scss']
})
export class AdminCreateArticleComponent implements OnInit {


  articles: any = [];

  public article: any = {
    header:'',
    text:'',
    tag:'',
    image: ''
  };

  constructor(private fb: FormBuilder, private ArticleService: ArticleService, private router: Router) {
    //Retrieve aricle from the API
    this.getAllArticle();
   }

   changeListener($event) : void {
    this.readThis($event.target);
  }

  readThis(inputValue: any) : void {
   var file:File = inputValue.files[0];
   var myReader:FileReader = new FileReader();

   myReader.onloadend = (e) => {
     this.article.image = myReader.result;
     console.log(this.article.image);
   }
   myReader.readAsDataURL(file);
  }


  ngOnInit() {

  }

  onChangeHeader(value){ this.article.header = value }
  onChangeText(value){ this.article.text = value }
  onChangeTag(value){ this.article.tag = value }


  getAllArticle(){
    this.ArticleService.getAllArticle().subscribe(articles => {
      this.articles = articles;
    });
  }

  submit(){
    const articles = this.articles;
    this.ArticleService.createArticle(this.article).subscribe(result => {
      this.getAllArticle();
      
    });

  }

}
