import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos;
  todoText:any="";
  constructor() { }

  addTodo(){
    todos.push({text:this.todoText});
    this.todoText = "";
    return false;
  }
  ngOnInit() {
    this.todos = [{text: 'cosa uno'},{text:'cosa dos'}];
  }



}
