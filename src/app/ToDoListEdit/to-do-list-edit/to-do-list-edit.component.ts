import { Component, OnInit } from '@angular/core';
import { result } from 'src/app/classes/result';
import { toDo } from 'src/app/classes/ToDo';
import { GetAllToDoService } from 'src/app/services/get-all-to-do.service';
import { UpdateToDoByIDService }  from 'src/app/services/update-to-do-by-id.service';

@Component({
  selector: 'app-to-do-list-edit',
  templateUrl: './to-do-list-edit.component.html',
  styleUrls: ['./to-do-list-edit.component.css']
})
export class ToDoListEditComponent implements OnInit {
  id:number;
  resCls: result;
  toDoCls:toDo;
  errorMsg:boolean;
  pageLoading:number;
  toDoClsArray: toDo[] =[];
  idError:boolean;
  constructor(private serUpdateToDo: UpdateToDoByIDService,
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
  edit(value){
    this.toDoCls = this.toDoClsArray.find(i => i.id === value)
    this.toDoCls.dueDate =  this.toDoCls.dueDate.split('T')[0];
    this.errorMsg = false;
    this.idError = false;
    this.pageLoading = 1
    this.resCls = new result();
  }
  submitData(){
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
    if(this.toDoCls.name === "" || this.toDoCls.name === undefined)
    {
      this.errorMsg = true;
      this.pageLoading = 2
      return ;
    }
    this.serUpdateToDo.updateToDoById(this.toDoCls).subscribe( act => 
    {
      this.resCls = act;
      this.pageLoading = 2
    })
  }
}

