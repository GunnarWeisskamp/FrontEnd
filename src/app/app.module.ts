import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { ToDoListAddComponent } from './ToDoListAdd/to-do-list-add/to-do-list-add.component';
import { ToDoListEditComponent } from './ToDoListEdit/to-do-list-edit/to-do-list-edit.component';
import { ToDoListDeleteComponent } from './ToDoListDelete/to-do-list-delete/to-do-list-delete.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { ViewAndEditPendingToDosComponent } from './ViewAndEditPendingToDos/view-and-edit-pending-to-dos/view-and-edit-pending-to-dos.component';
import { ToDoSingleViewComponent } from './ToDoSingleView/to-do-single-view/to-do-single-view.component';
import { FooterComponent } from './footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToDoListAddComponent,
    ToDoListEditComponent,
    ToDoListDeleteComponent,
    ViewAndEditPendingToDosComponent,
    ToDoSingleViewComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [MatDatepickerModule,
    MatNativeDateModule  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
