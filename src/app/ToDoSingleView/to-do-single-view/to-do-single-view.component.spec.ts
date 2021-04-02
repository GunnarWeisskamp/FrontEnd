import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoSingleViewComponent } from './to-do-single-view.component';

describe('ToDoSingleViewComponent', () => {
  let component: ToDoSingleViewComponent;
  let fixture: ComponentFixture<ToDoSingleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoSingleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoSingleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
