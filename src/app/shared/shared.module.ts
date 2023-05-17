import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
// import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'; 
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TextareaComponent } from './components/textarea/textarea.component';
// import { TextareaComponent } from './components/textarea/textarea.component';

@NgModule({
  declarations: [
    CardComponent,
    NavBarComponent,
    InputComponent,
    TextareaComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule
  ],
  exports:[
    InputComponent,NavBarComponent
    
  ]
})
export class SharedModule { }
