import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDasComponent } from './admin-das.component';

describe('AdminDasComponent', () => {
  let component: AdminDasComponent;
  let fixture: ComponentFixture<AdminDasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
