import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeRespondComponent } from './stripe-respond.component';

describe('StripeRespondComponent', () => {
  let component: StripeRespondComponent;
  let fixture: ComponentFixture<StripeRespondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripeRespondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeRespondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
