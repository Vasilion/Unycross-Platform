import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddForumPostComponent } from './add-forum-post/add-forum-post.component';
import { ForumDetailComponent } from './forum-detail/forum-detail.component';
import { ForumListComponent } from './forum-list/forum-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddForumPostComponent,
    ForumDetailComponent,
    ForumListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
