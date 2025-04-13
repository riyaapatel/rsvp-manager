import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RSVPManagerComponent } from './rsvpmanager/rsvpmanager.component';

const routes: Routes = [
  {
    path: '',
    component: RSVPManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RSVPRoutingModule { }
