import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,FormGroup,Validator} from '@angular/forms'

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  public registerForm: FormGroup;
  constructor(builder:FormBuilder) {
    let registerformscontrol= {
      nom: new FormControl(),
      description: new FormControl(),
      quantite: new FormControl(),
     
   }
   this.registerForm=builder.group(registerformscontrol);
  }

  ngOnInit(): void {
  }
  get nom(){return this.registerForm.get('nom')}
  get description(){return this.registerForm.get('description')}
  get quantite(){return this.registerForm.get('quantite')}


  registerCategory(){
    console.log(this.registerForm.value)
  }

}
