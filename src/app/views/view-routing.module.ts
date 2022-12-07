import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildListComponent } from './child-list/child-list.component';
import { ProfileComponent } from './profile/profile.component';
import { SupportComponent } from './support/support.component';
import { AppMapComponent } from './user-home/app-map.component';

const routes: Routes =[];
// const routes: Routes = [
//   {
//     path:'childList',
//     component:ChildListComponent,
//     pathMatch:'full'
//   },
//   {
//     path:'',
//     redirectTo:'userHome',
//     component:AppMapComponent,
//     pathMatch:'full'
//   },
//   {
//     path:'userHome',
//     component:AppMapComponent,
//     pathMatch:'full'
//   },
//   {
//     path:'profile',
//     component:ProfileComponent,
//     pathMatch:'full'
//   },
//   {
//     path:'support',
//     component:SupportComponent,
//     pathMatch:'full'
//   }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
