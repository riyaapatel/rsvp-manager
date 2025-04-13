import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedAttendeesComponent } from './confirmed-attendees.component';

describe('ConfirmedAttendeesComponent', () => {
  let component: ConfirmedAttendeesComponent;
  let fixture: ComponentFixture<ConfirmedAttendeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmedAttendeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmedAttendeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
