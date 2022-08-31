import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToDo } from 'src/app/interfaces/to-do';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  @ViewChild('todoListForm') userForm: NgForm | undefined;
  @Output() save = new EventEmitter<ToDo>();

  formTodo: ToDo;
  submitTodo: ToDo;

  constructor() {
    this.formTodo = {
      task: '',
      completed: false,
    };
    this.submitTodo = { ...this.formTodo };
  }

  ngOnInit(): void {}

  submitTask(): void {
    this.submitTodo = { ...this.formTodo };
    this.save.emit(this.submitTodo);
    this.formTodo.task = '';
  }
}
