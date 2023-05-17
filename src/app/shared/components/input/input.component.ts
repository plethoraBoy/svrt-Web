import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'svrt-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  visible: boolean = true;
  disabled: boolean = true;

  @Input() label: string = '';
  @Input() id: string = '';
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() name:string=''
  @Input() required: boolean = false;
  //@Input() icon: boolean = false;
  //@Input() forgot: boolean = false;
  @Input() type: string = '';
  @Input() form!: FormGroup;
  @Input() controlName : string = '';
  //@Output() forgotPasswordEvent = new EventEmitter<any>();
  //@ViewChild('password') passwordInput!: ElementRef<HTMLInputElement>;

  constructor(private renderer: Renderer2) {
    console.log("id",this.id)
  }

  ngOnInit(): void {}

  
}
