import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListEditComponent } from './to-do-list-edit.component';

describe('ToDoListEditComponent', () => {
  let component: ToDoListEditComponent;
  let fixture: ComponentFixture<ToDoListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
