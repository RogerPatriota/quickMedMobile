import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },  
  {
    path: 'about',
    loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'scaner',
    loadChildren: () => import('../scaner/scaner.module').then( m => m.ScanerPageModule)
  },
  {
    path: 'appointment',
    loadChildren: () => import('../appointment/appointment.module').then( m => m.AppointmentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
