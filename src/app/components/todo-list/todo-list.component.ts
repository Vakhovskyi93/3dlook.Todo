import {Component, OnInit, ViewChild} from '@angular/core';
import { TodoItem } from "../../interfaces/todo-item";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  listItem: TodoItem[] = [ ]
  todo: TodoItem = {
    id:'',
    title:'',
    text:''
  }
  @ViewChild ('formAddTodo') form;
  constructor() { }
  ngOnInit(): void {
  }
  addTodo(){
    const newTask = {
      id: String(Math.floor(Math.random() * Math.floor(9999))),
      title: this.todo.title,
      text: this.todo.text
    }
    this.listItem.unshift(newTask)
    this.form.reset()
  }
  deleteTask( id:string) {
    this.listItem = this.listItem.filter(task => task.id != id)
  }

}
