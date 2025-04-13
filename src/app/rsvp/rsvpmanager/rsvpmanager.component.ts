import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { RSVPServiceService } from 'src/services/rsvpservice.service';
import { MessageBoxComponent } from 'src/app/shared/components/message-box/message-box.component';
import { ConfirmedAttendeesComponent } from './confirmed-attendees/confirmed-attendees.component';

@Component({
  selector: 'app-rsvpmanager',
  templateUrl: './rsvpmanager.component.html',
  styleUrls: ['./rsvpmanager.component.css']
})
export class RSVPManagerComponent implements OnInit {
  ngbModalOptions: NgbModalOptions = {
    backdrop: 'static',
    keyboard: false,
    centered: true,
    size: 'lg'
  };

  ngbModalBoxOptions: NgbModalOptions = {
    backdrop: 'static',
    keyboard: false,
    centered: true,
    size: 'md'
  };
  @Output() callbackEvent: EventEmitter<any> = new EventEmitter();
  constructor(private rsvpService: RSVPServiceService,
    private modalService: NgbModal
  ) {}
  data: any = []
  rsvpOptions : any = ["Yes", "No", "Maybe"]
  ngOnInit(){
    this.getAllPlayers();
  }

  //Fetches the list of all the players
  getAllPlayers(){
    this.rsvpService.getAllPlayers().subscribe({
      next: (res) => this.getAllPlayersSuccess(res),
      error: (error) => this.apiErrorCallback(error)
    })
  }

  //Success function for getAllPlayers, loads players information in the data variable
  getAllPlayersSuccess(res:any){
    if (res.status !== 200) {
      return this.apiErrorCallback(res.status);
    }
  
    this.data = res.body;
  }

  //Common error callback function
  apiErrorCallback(error:any){
    console.log(error)
  }

  //Change RSVP status event
  changeRSVP(player:any){
    const updateModel = this.modalService.open(MessageBoxComponent, this.ngbModalBoxOptions);
      updateModel.componentInstance.title = "Are you sure?"
      updateModel.componentInstance.text = "Do you want to update the status?"
      updateModel.componentInstance.callbackEvent.subscribe((res:any) => {
        updateModel.close();
        this.cancel();
        if(res){
          console.log(player)
        }
      });   
  }
  cancel() {
    this.callbackEvent.emit();  
  }

  //Fetches the list of all the confirmed attendees
  getConfirmedAttendees(){
    let filteredList = ''
    filteredList = this.data.filter((d: { rsvp: string; }) => d.rsvp == 'Yes');
    const confirmedAttendeesList = this.modalService.open(ConfirmedAttendeesComponent, this.ngbModalBoxOptions);
    confirmedAttendeesList.componentInstance.title = "List of Confirmed Attendees"
    confirmedAttendeesList.componentInstance.data = filteredList 
    confirmedAttendeesList.componentInstance.callbackEvent.subscribe((res:any) => {
        confirmedAttendeesList.close();
        this.cancel();
      }); 
  }

  //Get the total, confirmed, declined responses
  getCounts(){
    const { total, confirmed, declined } = this.rsvpService.getCounts(this.data);
    const countModel = this.modalService.open(MessageBoxComponent, this.ngbModalBoxOptions);
      countModel.componentInstance.title = "Counts"
      countModel.componentInstance.text = "Total: " + total + "<br>" + "Confirmed: " + confirmed + "<br>" + "Declined: " + declined;
      countModel.componentInstance.callbackEvent.subscribe((res:any) => {
        countModel.close();
        this.cancel();
      }); 
  }
}