import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Post} from './post.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  /*we will use myForm as our FormGroup*/
  myForm: FormGroup;
  post: Post;
  /*inject fb instance as our FormBuilder*/
  constructor(_fb: FormBuilder) {
    this.myForm = _fb.group({
      'username': [null, Validators.compose([Validators.required])],
      'email': [null, Validators.compose([Validators.required])],
      'message': [null, Validators.compose([Validators.required])],
      'type': [null, Validators.compose([Validators.required])],
      'terms_check_box': [null, Validators.compose([Validators.required])]
    });
  }
  submitForm(form: any) {
    this.post = new Post(form.username, form.email, form.message, form.type);
    console.log('form value: ' + this.post.username);
    console.log('form value: ' + this.post.email);
    console.log('form value: ' + this.post.message);
    console.log('form value: ' + this.post.type);
    console.log('form value: ' + form.terms_check_box);
  }

  ngOnInit() {
  }

}
