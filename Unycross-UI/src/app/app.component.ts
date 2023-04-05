import { Component } from '@angular/core';
import { ForumPost } from './interfaces/forumpost';
import { ForumService } from './services/forum.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Unycross-UI';
  testPost: ForumPost = {
    title: 'test',
    body: 'this is a test'
  }

  constructor(public forumService: ForumService){

  }
  public test(){
    this.forumService.GetPostById('642cce61700ae0e2d808d559').subscribe(res =>{
      console.log(res)
    })
  }
}
