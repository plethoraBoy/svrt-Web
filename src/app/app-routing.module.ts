import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InputComponent } from './shared/components/input/input.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent,
  },
  {
    path: 'Home',
    loadChildren: () =>      
    import('./pages/home-page/home-page.module').then((m) => m.HomePageModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
