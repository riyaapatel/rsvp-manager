import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RSVPManagerComponent } from './rsvpmanager.component';

describe('RSVPManagerComponent', () => {
  let component: RSVPManagerComponent;
  let fixture: ComponentFixture<RSVPManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RSVPManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RSVPManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
