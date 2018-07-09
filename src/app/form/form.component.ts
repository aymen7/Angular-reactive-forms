import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Post} from './post.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  /*we will use myForm as our FormGroup*/
  myForm: FormGroup;
  /*post instance to store our user's input data */
  post: Post;
  /*inject fb instance as our FormBuilder*/
  constructor(_fb: FormBuilder) {
    this.myForm = _fb.group({
      'username': ['', Validators.compose([Validators.required, usernameValidator])],
      'email': ['', Validators.compose([Validators.required, Validators.min(3)])],
      'message': ['', Validators.compose([Validators.required])],
      'type': ['', Validators.compose([Validators.required])],
      'terms_check_box': ['', Validators.compose([Validators.required])]
    });
  }
  submitForm(form: any) {
    /* initialisation of the new post object with the user's input*/
    this.post = new Post(form.username, form.email, form.message, form.type);
    /*just for debugging */
    console.log('form value: ' + this.post.username);
    console.log('form value: ' + this.post.email);
    console.log('form value: ' + this.post.message);
    console.log('form value: ' + this.post.type);
    console.log('form value: ' + form.terms_check_box);
  }
  ngOnInit() {
  }
}
function usernameValidator(control: FormControl): { [s: string]: boolean} {
  /* this function is with the purpose of validating the username
     it take a FormControl instance as an input and return 'invalidUsername' if the username is not valid
     A regular expression that only matches a valid Github username
     url for the regex: https://www.npmjs.com/package/github-username-regex*/
  /* Adding a value when specifying the FormControl in the FormBuilder because if you leave it to null it will cuz
  *  major problems when calling the validator function */
if (!control.value.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i) ) {
  return {invalidUsername: true};
}
}


