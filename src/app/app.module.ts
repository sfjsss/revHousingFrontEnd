import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/dashboard/search/search.component';
import { AgmCoreModule } from '@agm/core';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { CreatePostComponent } from './components/dashboard/create-post/create-post.component';
import { GoodbyeComponent } from './components/goodbye/goodbye.component';
import { MyPostsComponent } from './components/dashboard/my-posts/my-posts.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { ViewPostComponent } from './components/dashboard/view-post/view-post.component';
import { BookmarkedPostsComponent } from './components/dashboard/bookmarked-posts/bookmarked-posts.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ListInterestedComponent } from './components/dashboard/my-posts/list-interested/list-interested.component';
import { ConfirmProfileUpdateComponent } from './components/dashboard/profile/confirm-profile-update/confirm-profile-update.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    WelcomeComponent,
    GoodbyeComponent,
    RegisterComponent,
    LoginComponent,
    CreatePostComponent,
    MyPostsComponent,
    ProfileComponent,
    ViewPostComponent,
    BookmarkedPostsComponent,
    ListInterestedComponent,
    ConfirmProfileUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDdU7KMs5IfYmqJXmYZc8MzL_8fN3z5Hec"
    })
  ],
  entryComponents: [ListInterestedComponent, ConfirmProfileUpdateComponent],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: "accent" }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
