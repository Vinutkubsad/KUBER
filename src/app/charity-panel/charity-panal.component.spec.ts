import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityPanalComponent } from './charity-panal.component';

describe('CharityPanalComponent', () => {
  let component: CharityPanalComponent;
  let fixture: ComponentFixture<CharityPanalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharityPanalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityPanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
