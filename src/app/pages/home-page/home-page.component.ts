import { Component, OnInit, } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  form!: FormGroup;
  formConfig!: any;
  mobile:boolean | undefined
  onSubmit(event: any) {

  }
  ngOnInit() {

  }
  constructor(private fb: FormBuilder) { }
}
