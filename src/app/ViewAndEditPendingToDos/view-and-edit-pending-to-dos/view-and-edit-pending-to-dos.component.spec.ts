import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAndEditPendingToDosComponent } from './view-and-edit-pending-to-dos.component';

describe('ViewAndEditPendingToDosComponent', () => {
  let component: ViewAndEditPendingToDosComponent;
  let fixture: ComponentFixture<ViewAndEditPendingToDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAndEditPendingToDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAndEditPendingToDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
