import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { toDo } from '../classes/ToDo';

@Injectable({
  providedIn: 'root'
})
export class GetAllToDoService {

  constructor(private http: HttpClient) { }

  getAllToDo() : Observable<toDo[]>
  {
    return this.http.get<toDo[]>("https://localhost:44384/api/ToDoGet/GetToDoList");
  }
}
//helpfdfsd