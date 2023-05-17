import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomePageComponent } from './home-page.component';
import { BookATableComponent } from './book-a-table/book-a-table.component';
import { ChefsComponent } from './chefs/chefs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent , 
    children: [
      {
        path: 'bookATable',
        component: BookATableComponent
      },
      {
        path: 'aboutUs',
        component: AboutUsComponent
      },
      {
        path: 'chefs',
        component: ChefsComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
       {
        path: 'events',
        component: EventsComponent
      }, 
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'menu',
        component: MenuComponent
      },
    
    ]

  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
