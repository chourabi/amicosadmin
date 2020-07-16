import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelreservationsComponent } from './hotelreservations.component';

describe('HotelreservationsComponent', () => {
  let component: HotelreservationsComponent;
  let fixture: ComponentFixture<HotelreservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelreservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelreservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
