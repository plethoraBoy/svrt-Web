import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookATableComponent } from './book-a-table/book-a-table.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MenuComponent } from './menu/menu.component';
import { ChefsComponent } from './chefs/chefs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EventsComponent } from './events/events.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutUsComponent,
    BookATableComponent,
    ContactUsComponent,
    MenuComponent,
    ChefsComponent,
    GalleryComponent,
    EventsComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule

  ]

})
export class HomePageModule { }
