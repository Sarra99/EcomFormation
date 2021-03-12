import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,FormGroup,Validator} from '@angular/forms'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public forgotpasswordForm: FormGroup;
  constructor(builder:FormBuilder) {
    let forgotpswdformscontrol= {
      email: new FormControl(),
     
   }
   this.forgotpasswordForm=builder.group(forgotpswdformscontrol);
  }

  ngOnInit(): void {
  }
 
  get email(){return this.forgotpasswordForm.get('email')}


  forgotpasswordUser(){
    console.log(this.forgotpasswordForm.value)
  }

}
