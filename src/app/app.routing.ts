import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component'; 
import { LoginComponent } from'./login/login.component';
import { ForgotPasswordComponent } from'./forgot-password/forgot-password.component';
import { AboutComponent } from'./about/about.component';
import { EventComponent } from'./event/event.component';
import { ArticleComponent } from'./article/article.component';
import { ServiceComponent } from'./service/service.component';
import { AccountComponent } from'./account/account.component';
import { ArticleShowcaseComponent } from'./article-showcase/article-showcase.component';
import { EventShowcaseComponent } from './event-showcase/event-showcase.component';
import { AdminComponent } from './admin/admin.component';
import { AdminEditArticlesComponent } from './admin-edit-articles/admin-edit-articles.component';
import { AdminCreateArticleComponent } from './admin-create-article/admin-create-article.component';
import { AdminArticleComponent } from './admin-article/admin-article.component';



const appRoutes: Routes = [ 
{ path: '', component: HomeComponent }, 
{ path: 'register', component: RegisterComponent },
{ path: 'login', component: LoginComponent },
{ path: 'forgot-password', component: ForgotPasswordComponent },
{ path: 'about', component: AboutComponent },
{ path: 'event', component: EventComponent },
{ path: 'article', component: ArticleComponent},
{ path: 'services', component: ServiceComponent},
{ path: 'account', component: AccountComponent},
{ path: 'article-showcase/:header/:text/:tag/:image', component: ArticleShowcaseComponent },
{ path: 'event-showcase', component: EventShowcaseComponent },
{ path: 'admin', component: AdminComponent },
{ path: 'admin-edit-articles/:header/:text/:tag/:image/:_id', component: AdminEditArticlesComponent },
{ path: 'admin-create-articles', component: AdminCreateArticleComponent },
{ path: 'admin-article', component: AdminArticleComponent }

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); 