import { Component } from '@angular/core';
import { Post } from './form/post.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post: Post;
  // toogle the form/posts visibility
  show_form: boolean;
  constructor() {
    this.post = new Post('', '', '', '');
    this.show_form = true;
  }
  formWasSubmited(post: Post) {
    console.clear();
    console.log('posts recieved in app.component');
    this.post = post;
    // toogle the visibility of the form
    this.show_form = !this.show_form;
  }
  clickedBtnWasClicked(event: boolean) {
    console.log('back btn event was received and equal: ' + event);
    this.show_form = !this.show_form;
  }
}
