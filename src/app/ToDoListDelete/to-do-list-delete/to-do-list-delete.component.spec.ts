import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListDeleteComponent } from './to-do-list-delete.component';

describe('ToDoListDeleteComponent', () => {
  let component: ToDoListDeleteComponent;
  let fixture: ComponentFixture<ToDoListDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoListDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
