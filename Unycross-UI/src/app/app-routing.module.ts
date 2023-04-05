import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddForumPostComponent } from './add-forum-post/add-forum-post.component';
import { ForumDetailComponent } from './forum-detail/forum-detail.component';
import { ForumListComponent } from './forum-list/forum-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'forum-detail' },
  { path: 'add-forum-post', component: AddForumPostComponent},
  { path: 'edit-forum-post/:id', component: ForumDetailComponent},
  { path: 'forum-list', component: ForumListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
