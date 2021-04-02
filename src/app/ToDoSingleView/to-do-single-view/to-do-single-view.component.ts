import { Component, OnInit } from '@angular/core';
import { toDo } from 'src/app/classes/ToDo';
import { GetToDoByIDService } from 'src/app/services/get-to-do-by-id.service';

@Component({
  selector: 'app-to-do-single-view',
  templateUrl: './to-do-single-view.component.html',
  styleUrls: ['./to-do-single-view.component.css']
})
export class ToDoSingleViewComponent implements OnInit {
  id:number;
  error:number
  toDoCls:toDo;
  errorMsg:string;
  pageLoading:number;
  constructor(private serGetToDoByID: GetToDoByIDService) { }

  ngOnInit(): void {
    this.toDoCls = new toDo();
    this.error = 0;
    this.errorMsg = "";
    this.pageLoading = 1;
  }

  submitData(){
    this.error = 0;
    if(this.id === undefined){
      this.error = 1;
      this.errorMsg = "You must enter an ID";
      return;
    }
    
    this.serGetToDoByID.getToDoByID(this.id)
    .subscribe( act => 
    {
      this.toDoCls = act;
      if(this.toDoCls.description.indexOf('Error') >= 0){
        this.errorMsg = this.toDoCls.description;
        this.error = 1;
      }
      if(this.toDoCls.id === null){
        this.errorMsg = "No records returned for that record number";
        this.error = 1;
      }
    })
  }
}
