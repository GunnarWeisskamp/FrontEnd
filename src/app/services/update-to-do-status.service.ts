import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { toDo } from '../classes/ToDo';
import { result } from '../classes/result';

@Injectable({
  providedIn: 'root'
})
export class UpdateToDoStatusService {

  constructor(private http: HttpClient) { }

  updateToDoStatus(item:toDo): Observable<result>{
    return this.http.post<result>("https://localhost:44384/api/ToDoStatus/UpdateToDoStatus", item)
  }
}
