import { Component } from '@angular/core';
import { Post } from './form/post.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts_list: Post[];
  // toogle the form/posts visibility
  show_form: boolean;
  constructor() {
    this.posts_list = [];
    this.show_form = true;
  }
  formWasSubmited(Posts: Post[]) {
    console.clear();
    console.log('posts recieved in app.component');
    this.posts_list = Posts;
    for (let post of this.posts_list) {
      console.log('post username: ' + post.username);
    }
    // toogle the visibility of the form
    this.show_form = !this.show_form;
  }
  clickedBtnWasClicked(event: boolean) {
    console.log('back btn event was received and equal: ' + event);
    this.show_form = !this.show_form;
  }
}
