import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/dashboard/search/search.component';
import { AgmCoreModule } from '@agm/core';
import { CreatePostComponent } from './components/dashboard/create-post/create-post.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC31fPvxdguqVUnokZKGqe_GSwhnIjv-go'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
