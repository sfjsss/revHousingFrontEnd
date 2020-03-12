import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/dashboard/search/search.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { GoodbyeComponent } from './components/goodbye/goodbye.component';
import { MyPostsComponent } from './components/dashboard/my-posts/my-posts.component';
import { CreatePostComponent } from './components/dashboard/create-post/create-post.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';

const routes: Routes = [
  { path: "welcome", component: WelcomeComponent },
  { path: "goodbye", component: GoodbyeComponent },
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "", component: SearchComponent },
      { path: "create-post", component: CreatePostComponent },
      { path: "my-posts", component: MyPostsComponent },
      { path: "profile", component: ProfileComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
