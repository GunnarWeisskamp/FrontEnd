import { Component, OnInit } from '@angular/core';
import { result } from 'src/app/classes/result';
import { toDo } from 'src/app/classes/ToDo';
import { GetToDoByStatusService } from 'src/app/services/get-to-do-by-status.service';
import { UpdateToDoStatusService } from 'src/app/services/update-to-do-status.service';

@Component({
  selector: 'app-view-and-edit-pending-to-dos',
  templateUrl: './view-and-edit-pending-to-dos.component.html',
  styleUrls: ['./view-and-edit-pending-to-dos.component.css']
})
export class ViewAndEditPendingToDosComponent implements OnInit {
  id:number;
  resCls: result;
  toDoCls:toDo;
  errorMsg:boolean;
  pageLoading:number;
  answer:string;
  toDoClsArray: toDo[] =[];
  statusToGet:string;
  test:boolean;
  constructor(private serGetByStatus: GetToDoByStatusService, 
              private serUpdateStatus: UpdateToDoStatusService) { }

  ngOnInit(): void {
    this.toDoCls = new toDo();
    this.resCls = new result();
    this.errorMsg = false;
    this.pageLoading = 1;
    this.statusToGet = "pending";
    this.getAllToDoByStatus();
    this.test = true;
    
  }

  getAllToDoByStatus(){
    this.toDoCls = new toDo();
    let typOfStatus;
    if(this.statusToGet == "pending")
    {
      typOfStatus = false;
    }
    else
    {
      typOfStatus = true;
    }

    this.serGetByStatus.getToDoByStatus(typOfStatus).
    subscribe((x: toDo[]) => {
      this.toDoClsArray = x;
    });
  }

  edit(value){
    this.toDoCls = this.toDoClsArray.find(i => i.id === value)
    this.toDoCls.dueDate =  this.toDoCls.dueDate.split('T')[0];
    this.resCls = new result();
  }
  submitData(){
    if(this.answer == "pending")
    {
      this.toDoCls.status = false;
    }
    else
    {
      this.toDoCls.status = true;
    }

    this.serUpdateStatus.updateToDoStatus(this.toDoCls).subscribe( act => 
    {
      this.resCls = act;
      this.pageLoading = 2
    })
  }
}
