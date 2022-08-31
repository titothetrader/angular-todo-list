import { animate, animation, style, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/interfaces/to-do';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  title: string = 'My To-Do List';

  todoList: ToDo[] = [];

  completedTodos: ToDo[] = [];

  constructor() {
    this.todoList = [
      {
        task: 'Dishes',
        completed: false,
      },
      {
        task: 'Laundry',
        completed: false,
      },
      {
        task: 'Cleaning',
        completed: false,
      },
      {
        task: 'Vacuum',
        completed: false,
      },
    ];
  }

  ngOnInit(): void {}

  addTodo(todo: ToDo): void {
    this.todoList = [...this.todoList, todo];
  }

  removeTodo(todoIn: string): void {
    console.log('removeTodo: ' + todoIn);
    let index = 0;
    this.todoList.map((todo, i) => {
      if (todo.task === todoIn) {
        index = i;
      }
      return index;
    });
    this.todoList.splice(index, 1);
  }

  completeTodo(todo: string): void {
    let tempTodo = {
      task: todo,
      completed: true,
    };
    this.completedTodos = [...this.completedTodos, tempTodo];
  }
}
