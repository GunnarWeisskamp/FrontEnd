import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ToDoListAddComponent } from './ToDoListAdd/to-do-list-add/to-do-list-add.component';
import { ToDoListDeleteComponent } from './ToDoListDelete/to-do-list-delete/to-do-list-delete.component';
import { ToDoListEditComponent } from './ToDoListEdit/to-do-list-edit/to-do-list-edit.component';
import { ToDoSingleViewComponent } from './ToDoSingleView/to-do-single-view/to-do-single-view.component';
import { ViewAndEditPendingToDosComponent } from './ViewAndEditPendingToDos/view-and-edit-pending-to-dos/view-and-edit-pending-to-dos.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ToDoSingleViewComponent', component: ToDoSingleViewComponent},
  { path: 'ToDoListAdd', component: ToDoListAddComponent },
  { path: 'ToDoListEdit', component: ToDoListEditComponent },
  { path: 'ToDoListRemove', component: ToDoListDeleteComponent, },
  { path: 'ViewAndEditPendingToDosComponent', component: ViewAndEditPendingToDosComponent, },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
