import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/dashboard/search/search.component';
import { CreatePostComponent } from './components/dashboard/create-post/create-post.component';
import { MyPostsComponent } from './components/dashboard/my-posts/my-posts.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: '', component: SearchComponent },
    { path: 'create-post', component: CreatePostComponent },
    { path: 'my-posts', component: MyPostsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
