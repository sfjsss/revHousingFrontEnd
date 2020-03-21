import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/dashboard/search/search.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { GoodbyeComponent } from './components/goodbye/goodbye.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MyPostsComponent } from './components/dashboard/my-posts/my-posts.component';
import { CreatePostComponent } from './components/dashboard/create-post/create-post.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { ViewPostComponent } from './components/dashboard/view-post/view-post.component';
import { BookmarkedPostsComponent } from './components/dashboard/bookmarked-posts/bookmarked-posts.component';
import { EditPostComponent } from './components/dashboard/edit-post/edit-post.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: "welcome", component: WelcomeComponent },
  { path: "goodbye", component: GoodbyeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: '', component: DashboardComponent, children: [
      { path: '', component: SearchComponent },
      { path: 'create-post', component: CreatePostComponent },
      { path: 'edit-post/:id', component: EditPostComponent },
      { path: 'my-posts', component: MyPostsComponent },
      { path: 'view-post/:id', component: ViewPostComponent },
      { path: "profile", component: ProfileComponent },
      { path: 'bookmarked-posts', component: BookmarkedPostsComponent }
    ], canActivate: [AuthGuard]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
