import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityUserComponent } from './charity-user.component';

describe('CharityUserComponent', () => {
  let component: CharityUserComponent;
  let fixture: ComponentFixture<CharityUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharityUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
