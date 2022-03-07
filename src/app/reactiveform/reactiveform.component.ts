import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  addLoanTypeForm!: FormGroup;

  constructor(private fb: FormBuilder) { 
   
  }
  arr:any=[];
  ngOnInit(): void {
    
  /*  this.addLoanTypeForm = new FormGroup({
      'loanName':new FormControl(),
      'loanDescription':new FormControl(),
      'loanType':new FormControl(),
      'genderControl':new FormControl(),
      // 'male':new FormControl(),
      'state':new FormControl(),
      'terms':new FormControl()
    })
    */
  
    this.addLoanTypeForm = this.fb.group({
      loanName: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z]+$')]],
      loanDescription: ['loan for car'],
      loanType: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      genderControl: ['female'],
      // male:new FormControl(),
      state:  ['Gujrat'],
      terms: [true],
      users: new FormArray([
       this.fb.group({
         name:new FormControl(''),
         age:new FormControl(''),
         dept:new FormControl('')
       })
      ])
    })
   this.addLoanTypeForm.statusChanges.subscribe(data=>{
     console.log(data);
   })
  }
   
  get users(): FormArray {
    return this.addLoanTypeForm.get('users') as FormArray;
  }
  AddUsers(){
    let userArr = this.addLoanTypeForm.get('users') as FormArray;
    let newUser =  this.fb.group({
      'name':'',
      'age':'',
      'dept':''
    })
    userArr.push(newUser);
  }

  removeUser(i:any){
  let arr =  this.addLoanTypeForm.get('users') as FormArray;
  arr.removeAt(i);
  }
  addLoanType() {
    console.log(this.addLoanTypeForm.value);

  }
  setLoanValue() {
    const user1 = {
      'loanName': 'bank',
      'loanDescription': 'this is loan',
      'loanType': 'year',
      'genderControl': 'male',
      'state': 'MP',
      'terms': true
    }
    // this.addLoanTypeForm.setValue(user);
    this.addLoanTypeForm.patchValue(user1);
  }
  resetLoanValue() {
    this.addLoanTypeForm.reset();
  }
  ln: any;
  readLoanValue() {
    console.log(this.addLoanTypeForm.value);
    console.log(this.addLoanTypeForm.get('loanName')?.value);


  }
  changeValue() {
    /*  this.addLoanTypeForm.valueChanges.subscribe(data => {
     this.ln = data.loanName;
     console.log(this.ln);
     console.log(this.addLoanTypeForm.valid);
   })
   */

    this.addLoanTypeForm.get('loanName')?.valueChanges.subscribe(data => {
      console.log("Form value");
      console.log(data);
    })
  }
  changeStatus() {
    this.addLoanTypeForm.get('loanType')?.statusChanges.subscribe(data => {
      console.log("Form Status");
      console.log(data);
    })
  }

}
