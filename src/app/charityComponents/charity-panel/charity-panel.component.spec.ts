import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityPanelComponent } from './charity-panel.component';

describe('CharityPanelComponent', () => {
  let component: CharityPanelComponent;
  let fixture: ComponentFixture<CharityPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharityPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
