import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RSVPRoutingModule } from './rsvp-routing.module';
import { RSVPManagerComponent } from './rsvpmanager/rsvpmanager.component';
import { RSVPServiceService } from 'src/services/rsvpservice.service';
import { FormsModule } from '@angular/forms';
import { ConfirmedAttendeesComponent } from './rsvpmanager/confirmed-attendees/confirmed-attendees.component';


@NgModule({
  declarations: [
    RSVPManagerComponent,
    ConfirmedAttendeesComponent
  ],
  imports: [
    CommonModule,
    RSVPRoutingModule,
    FormsModule
  ],
  providers:[
    RSVPServiceService
  ]
})
export class RSVPModule { }
