

import { ActionReducerMap } from '@ngrx/store';
import {Todo} from './todos/models/todo.models';
import { todoReducer } from './todos/todo-reducer';
import { filtroReducer } from './filtros/filtro.reducer';
import { filtrosValidos } from './filtros/filtro.actions';

export interface AppState {
    todos: Todo[],
    filtro: filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
}