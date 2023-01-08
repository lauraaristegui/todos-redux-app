import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


import { Store } from '@ngrx/store';
import * as actions from '../todos-actions'


import { Todo } from '../models/todo.models';
import { AppState } from '../../app.reducer';
import { borrar } from '../todos-actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputFisico') txtInputFisico: ElementRef
    chkCompletado: FormControl;
    txtInput: FormControl;

    editando: boolean = false;
  constructor(private store: Store<AppState>) {   }
  ngOnInit(): void {

   this.chkCompletado =  new FormControl(this.todo.completado);
   this.txtInput = new FormControl(this.todo.texto, Validators.required);
   this.chkCompletado.valueChanges.subscribe(valor => {
    this.store.dispatch(actions.toogle({id: this.todo.id}))
  })
  }
  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.focus();
    },1)
  }

  termninarEdicion() {
    this.editando = false;
    if(this.txtInput.invalid) {return;}
    if(this.txtInput.value === this.todo.texto) {return;}
    this.store.dispatch(actions.editar({id: this.todo.id, texto: this.txtInput.value}))
  }
   borrar() {
    this.store.dispatch(actions.borrar({id: this.todo.id}))
   }
}
