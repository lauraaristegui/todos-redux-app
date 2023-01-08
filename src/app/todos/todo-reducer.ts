import { createReducer, on } from '@ngrx/store';
import { crear, toogle, editar, borrar, toogleAll } from './todos-actions';
import { Todo } from './models/todo.models';

export const estadoInicial:Todo[]= [
new Todo('salvar al mundo'),
new Todo('vencer a thanos'),
new Todo('comprar traje de ironman'),
new Todo('robar escdo del capitán america')
];

export const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(toogle, (state, {id}) => {
    return state.map(todo => {
      if(todo.id === id) {
        return {
         ...todo,
         completado: !todo.completado
        }

      } else {
        return todo;
      }
    })
  }),
  on(editar, (state, {id, texto}) => {
    return state.map(todo => {
      if(todo.id === id) {
        return {
         ...todo,
         texto: texto
        }

      } else {
        return todo;
      }
    })
  }),

  on(borrar, (state, {id}) => {
    return state.filter(todo => todo.id !== id) 
  }),


  on(toogleAll, (state, {completado}) =>  state.map(todo => {
        return {
         ...todo,
         completado: completado
        }
  })
  
  )

);
export function todoReducer(state, action) {
    return _todoReducer(state, action)
}