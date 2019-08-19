
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { routing }  from './app.routing'; 
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ServiceComponent } from './service/service.component';
import { ArticleComponent } from './article/article.component';
import { EventComponent } from './event/event.component';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { ArticleShowcaseComponent } from './article-showcase/article-showcase.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FutureEventsComponent } from './future-events/future-events.component';
import { ContactComponent } from './contact/contact.component';
import { EventShowcaseComponent } from './event-showcase/event-showcase.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminEditArticlesComponent } from './admin-edit-articles/admin-edit-articles.component';
import { AdminCreateArticleComponent } from './admin-create-article/admin-create-article.component';
import { HttpClientModule } from'@angular/common/http';
import { ArticleService } from'./article.service';
import { AdminArticleComponent } from './admin-article/admin-article.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ServiceComponent,
    ArticleComponent,
    EventComponent,
    AboutComponent,
    AccountComponent,
    ArticleShowcaseComponent,
    NavbarComponent,
    FooterComponent,
    FutureEventsComponent,
    ContactComponent,
    EventShowcaseComponent,
    AdminNavbarComponent,
    AdminComponent,
    AdminEditArticlesComponent,
    AdminCreateArticleComponent,
    AdminArticleComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

    
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
    