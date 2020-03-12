import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/dashboard/search/search.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { GoodbyeComponent } from './components/goodbye/goodbye.component';
import { MyPostsComponent } from './components/dashboard/my-posts/my-posts.component';
import { CreatePostComponent } from './components/dashboard/create-post/create-post.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { ViewPostComponent } from './components/dashboard/view-post/view-post.component';
import { BookmarkedPostsComponent } from './components/dashboard/bookmarked-posts/bookmarked-posts.component';

const routes: Routes = [
  { path: "welcome", component: WelcomeComponent },
  { path: "goodbye", component: GoodbyeComponent },
  {
    path: '', component: DashboardComponent, children: [
      { path: '', component: SearchComponent },
      { path: 'create-post', component: CreatePostComponent },
      { path: 'my-posts', component: MyPostsComponent },
      { path: 'view-post', component: ViewPostComponent },
      { path: "profile", component: ProfileComponent },
      { path: 'bookmarked-posts', component: BookmarkedPostsComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
