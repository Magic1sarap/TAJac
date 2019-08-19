import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }
  getAllArticle() {
    return this.http.get<any[]>('./api/articles');
  }
  createArticle(article) {
    return this.http.post('./api/articles/add', article);
  }

  deleteArticle(id) {
    return this.http.delete(`./api/articles/delete/${id}`);
  }

  getArticlebyId(header) {
    return this.http.get<any[]>('./api/getArticlebyId/' + header);

  }

  // updateArticle(article) {
  //   return this.http.put('./api/getArticlebyId/update/', article);
  // };

  updateArticle(id:string, text:string, tag:string, image:string, header:string) {
    var json = {id:id, text: text, tag: tag, image: image, header: header }
    return this.http.put<any[]>('./api/articles/update/' ,json);
  }

}
