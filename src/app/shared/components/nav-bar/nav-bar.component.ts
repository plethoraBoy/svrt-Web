import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'svrt-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

    //  @Input headerLight=new EventEmitter()
  isDarkTheme=false
  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
  }
  orderNow(){
    
  }
}
