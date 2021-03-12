import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,FormGroup,Validator} from '@angular/forms'

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss']
})
export class CategoryUpdateComponent implements OnInit {

  public registerForm: FormGroup;
  constructor(builder:FormBuilder) {
    let registerformscontrol= {
      nom: new FormControl(),
      description: new FormControl(),
     
      
   }
   this.registerForm=builder.group(registerformscontrol);
  }

  ngOnInit(): void {
  }
  get nom(){return this.registerForm.get('nom')}
  get description(){return this.registerForm.get('description')}
 

  registerCategory(){
    console.log(this.registerForm.value)
  }

}
