import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Post } from '../form/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  @Input() p_list: Post[];
  @Output() onClickBackBtn: EventEmitter<boolean>;
  constructor() {
    this.onClickBackBtn = new EventEmitter<boolean>();
  }

  ngOnInit() {
  }
  btnClicked() {
    this.onClickBackBtn.emit(true);
  }

}
