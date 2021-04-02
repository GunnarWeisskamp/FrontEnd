import { Component, OnInit } from '@angular/core';
import { result } from 'src/app/classes/result';
import { toDo } from 'src/app/classes/ToDo';
import { DeleteToDoItemService } from 'src/app/services/delete-to-do-item.service';
import { GetAllToDoService } from 'src/app/services/get-all-to-do.service';

@Component({
  selector: 'app-to-do-list-delete',
  templateUrl: './to-do-list-delete.component.html',
  styleUrls: ['./to-do-list-delete.component.css']
})
export class ToDoListDeleteComponent implements OnInit {
    id:number;
    resCls: result;
    toDoCls:toDo;
    errorMsg:boolean;
    pageLoading:number;
    toDoClsArray: toDo[] =[];
    idError:boolean;
    constructor(private serDeleteToDo: DeleteToDoItemService,
                private serAllToDo : GetAllToDoService) { }

    ngOnInit(): void {
      this.toDoCls = new toDo();
      this.resCls = new result();
      this.errorMsg = false;
      this.pageLoading = 1;
      this.getAllToDo();
      this.idError = false;
    }

    getAllToDo(){
      this.serAllToDo.getAllToDo().
      subscribe((x: toDo[]) => {
        this.toDoClsArray = x;
      });
    }
    recordToDelete(value){
      this.toDoCls = this.toDoClsArray.find(i => i.id === value)
      this.toDoCls.dueDate =  this.toDoCls.dueDate.split('T')[0];
      this.errorMsg = false;
      this.idError = false;
      this.pageLoading = 1
      this.resCls = new result();
    }
    deleteData(){
      this.errorMsg = false;
      this.idError = false;
      this.pageLoading = 1
      this.resCls = new result();
      if(this.toDoCls.id === null || this.toDoCls.id === undefined)
      {
        this.idError = true;
        this.pageLoading = 2
        return ;
      }

      this.serDeleteToDo.deleteToDoItem(this.toDoCls).subscribe( act => 
      {
        this.resCls = act;
        this.pageLoading = 2
      })
    }
  }