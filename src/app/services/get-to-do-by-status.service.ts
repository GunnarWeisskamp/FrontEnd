import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { toDo } from '../classes/ToDo';

@Injectable({
  providedIn: 'root'
})
export class GetToDoByStatusService {

  constructor(private http: HttpClient) { }

  getToDoByStatus(status: boolean): Observable<toDo[]>{
    return this.http.get<toDo[]>("https://localhost:44384/api/ToDoStatus/GetToDoStatusByID?status=" + status);
  }
}
