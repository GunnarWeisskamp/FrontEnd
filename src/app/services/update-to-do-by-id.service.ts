import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { toDo } from '../classes/ToDo';
import { result } from '../classes/result';

@Injectable({
  providedIn: 'root'
})
export class UpdateToDoByIDService {

  constructor(private http: HttpClient) { }

  updateToDoById(item:toDo): Observable<result>{
    return this.http.post<result>("https://localhost:44384/api/ToDoUpdate/UpdateToDoItem", item)
  }
}


