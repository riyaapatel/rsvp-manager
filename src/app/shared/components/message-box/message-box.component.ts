import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal,ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() btnText: string = '';
  @Input() showCancelButton : boolean = false;
  @Input() callValue: boolean = false;
  @Output() callbackEvent: EventEmitter<any> = new EventEmitter();
  closeResult = '';
  
  
  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  
  onClose(){
    this.callbackEvent.emit(this.callValue);
    this.activeModal.close('Close click');
  }
  onSubmit(){
    this.callbackEvent.emit(true);
  }
}