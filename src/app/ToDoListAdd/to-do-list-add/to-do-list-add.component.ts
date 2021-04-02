import { Component, OnInit } from '@angular/core';
import { result } from 'src/app/classes/result';
import { toDo } from 'src/app/classes/ToDo';
import { InsertToDoItemService } from 'src/app/services/insert-to-do-item.service';

@Component({
  selector: 'app-to-do-list-add',
  templateUrl: './to-do-list-add.component.html',
  styleUrls: ['./to-do-list-add.component.css']
})
export class ToDoListAddComponent implements OnInit {
  resCls: result;
  toDoCls:toDo;
  errorMsg:boolean;
  pageLoading:number;
    answer:string;
  constructor(private serInsertToDo: InsertToDoItemService) { }

  ngOnInit(): void {
    this.toDoCls = new toDo();
    this.resCls = new result();
    this.errorMsg = false;
    this.pageLoading = 1;
  }

  submitData(){
    this.errorMsg = false;
    if(this.toDoCls.name === "" || this.toDoCls.name === undefined)
    {
      this.errorMsg = true;
      return ;
    }
    this.serInsertToDo.insertToDoItem(this.toDoCls).subscribe( act => 
    {
      this.resCls = act;
      this.pageLoading = 2
    })
  }
}
