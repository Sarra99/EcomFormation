import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,FormGroup,Validator, Validators} from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
public registerForm: FormGroup;
  constructor(builder:FormBuilder) {
    let registerformscontrol= {
      firstname: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern("[A-Z][A-Za-z 'éç]")
      ]),
      lastname: new FormControl("", [
        Validators.required
      ]),
      birthday: new FormControl("", [
        Validators.required
      ]),
      gender: new FormControl("", [
        Validators.required
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl("", [
        Validators.required
      ]),
      repassword: new FormControl("", [
        Validators.required
      ]),
   }
   this.registerForm=builder.group(registerformscontrol);
  }

  ngOnInit(): void {
  }
  get firstname(){return this.registerForm.get('firstname')}
  get lastname(){return this.registerForm.get('lastname')}
  get birthday(){return this.registerForm.get('birthday')}
  get gender(){return this.registerForm.get('gender')}
  get email(){return this.registerForm.get('email')}
  get password(){return this.registerForm.get('password')}
  get repassword(){return this.registerForm.get('repassword')}

  registerUser(){
    console.log(this.registerForm.value)
  }
}
