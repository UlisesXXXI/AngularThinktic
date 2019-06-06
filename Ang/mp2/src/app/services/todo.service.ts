import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Partido} from '../entities/partido';
import {}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  partidos:Partido[];
  constructor(private http:HttpClient) { }
}
