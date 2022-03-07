import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  firstname:string ='';
  terms:boolean=false;
  choose:string='Gujrat';
  description:string='';
  constructor() { }

  ngOnInit(): void {
   

  }

  addCustomer(val:NgForm){
    console.log(val);
    console.log(val.value.firstname);
    console.log(val.value.terms);
    console.log(val.value.choose);
    console.log(val.value.description);
    // validation
    // data processing
    // Call api to save this data
  }
  resetData(val:NgForm){
    // val.reset();
    val.resetForm();
  }
  setFormData(val:NgForm){
    let setData = {
      firstname:'jeel',
      terms:true,
      choose:'MP',
      description:'This is big state'
    }
    val.setValue(setData);
  }

}
