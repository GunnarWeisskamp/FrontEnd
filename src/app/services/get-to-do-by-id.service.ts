import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { toDo } from '../classes/ToDo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetToDoByIDService {

  constructor(private http: HttpClient) { }

  getToDoByID(id: number): Observable<toDo>{
    return this.http.get<toDo>("https://localhost:44384/api/ToDoGet/GetToDoByID?id=" + id);
  }
}
