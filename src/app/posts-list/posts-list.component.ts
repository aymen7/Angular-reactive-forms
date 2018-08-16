import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../form/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  @Input() p_list: Post[];
  list: number[];
  constructor() {
    this.list = [1, 2 , 3];
  }

  ngOnInit() {
  }

}
