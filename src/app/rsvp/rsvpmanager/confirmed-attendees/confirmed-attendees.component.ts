import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmed-attendees',
  templateUrl: './confirmed-attendees.component.html',
  styleUrls: ['./confirmed-attendees.component.css']
})
export class ConfirmedAttendeesComponent implements OnInit {
  @Input() data: any;
  confirmendAttendees: any;
  @Output() callbackEvent: EventEmitter<any> = new EventEmitter();

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }
  
  ngOnInit(): void {
    this.confirmendAttendees = this.data;
    console.log(this.confirmendAttendees)
  }

  onClose(){
    this.callbackEvent.emit(this.callValue);
    this.activeModal.close('Close click');
  }
  callValue(callValue: any) {
    throw new Error('Method not implemented.');
  }
}
