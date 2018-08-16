import { Component } from '@angular/core';
import { Post } from './form/post.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts_list: Post[];
  constructor() {
    this.posts_list = [];
  }
  formWasSubmited(Posts: Post[]) {
    console.clear();
    console.log('posts recieved in app.component');
    this.posts_list = Posts;
    for (let post of this.posts_list) {
      console.log('post username: ' + post.username);
    }
  }
}
