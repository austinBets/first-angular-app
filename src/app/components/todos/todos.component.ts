import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './../../models/Todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{

  todos:Todo[] | undefined;

  inputTodo:string = "";

  constructor() {}

  ngOnInit(): void {
      this.todos = [
        {
          content: 'First todo',
          completed: false
        },
        {
          content: 'Second todo',
          completed: false
        }
      ]
  }

  toggleDone (id: number) {
    if (this.todos) {
      this.todos.map((v, i) => {
        if (i === id) v.completed = !v.completed;
        return v;
      });
    }
  }

  deleteTodo (id: number) {
    if (this.todos){
      this.todos = this.todos.filter((v, i) => i !== id);
    }

  }

  addTodo () {
    if (this.todos){
      this.todos.push({
        content: this.inputTodo,
        completed:false
      });

      this.inputTodo = "";
    }
  }

}
