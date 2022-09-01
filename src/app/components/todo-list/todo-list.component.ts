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

  filteredIndexes: number[] = [];
  filteredList: ToDo[] = [];

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

  completeTodo(todo: string, i: number): void {
    let tempTodo = {
      task: todo,
      completed: false,
    };
    console.log(this.todoList[i]);
    this.todoList[i].completed = !this.todoList[i].completed;

    this.completedTodos = [...this.completedTodos, tempTodo];
  }

  searchList(search: string) {
    this.filteredIndexes = [];
    if (search === '') {
      console.log('search empty');
    } else {
      this.todoList.forEach((todo, i) => {
        !todo.task.toLowerCase().includes(search.toLowerCase()) &&
          this.filteredIndexes.push(i);
      });
      // console.log(this.filteredIndexes);
    }
  }
}
