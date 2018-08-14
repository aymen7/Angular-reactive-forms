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
  messageLength: number;
  /*inject fb instance as our FormBuilder*/
  constructor(_fb: FormBuilder) {
    this.myForm = _fb.group({
      'username': ['', Validators.compose([Validators.required, usernameValidator])],
      'email': ['', Validators.compose([Validators.required, Validators.min(3)])],
      'message': ['', Validators.compose([Validators.required])],
      'type': ['', Validators.compose([Validators.required])],
      /* use the validator.pattern to check if the checkbox is checked (in case of toggler)*/
      'terms_check_box': [false, Validators.compose([Validators.required, Validators.pattern('true')])]
    });
    this.messageLength = 0;
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
  getMsgLength() {
    /* get the value of the message length on value changes */
    this.myForm.get('message').valueChanges.subscribe(
      (message) => {
        this.messageLength = message.toString().length;
      }
    );
  }
  getMessageType() {
    /* validate the message based on:
   * 1.must be longer or equal to 100 character if the type chosen is 'long'
   * 2.must be less than 100 character if the type chosen is 'short'*/
  //#region triggers when the type changes
  this.myForm.get('type').valueChanges.subscribe(
    (type) => {
      if (type === 'short') {
        this.myForm.get('message').setValidators([Validators.required, shortMessageValidator]);
        console.log(this.myForm.get('message').value.toString().length + ' short');
      }// end of if
      if (type === 'long') {
        this.myForm.get('message').setValidators([Validators.required, longMessageValidator]);
        console.log(this.myForm.get('message').value.toString().length + ' long');
      }// end if
    }// fat arrow
  );
  //#endregion for when the type change
  }
  ngOnInit() {
    // calling the getMsgLength()
    this.getMsgLength();
    // calling the checkBoxChange
    // this.checkBoxChange();
    // calling getMessageType()
    this.getMessageType();
    
  }
}// end of the component
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
function shortMessageValidator(control: FormControl): { [s: string]: boolean} {
  // validate the message based on:
  // 2.must be less than 100 character if the type chosen is 'short'
  if (control.value.toString().length > 100 ) {
    console.log('short msg validator activate');
    return {invalidMessage: true};
  }

}
function longMessageValidator(control: FormControl): { [s: string]: boolean} {
  // validate the message based on:
  // 1.must be longer or equal to 100 character if the type chosen is 'long'
  if (control.value.toString().length < 100 ) {
    console.log('long msg validator activate');
    return {invalidMessage: true};
  }
}
