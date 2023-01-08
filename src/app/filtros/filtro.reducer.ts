import { setFiltro, filtrosValidos } from './filtro.actions';
import { Action, createReducer, on } from '@ngrx/store';


export const filtroini: filtrosValidos = 'todos';

const _filtroReducer = createReducer<filtrosValidos, Action>(filtroini,
    on(setFiltro,(state, {filtro})=> filtro) 
   );
export function filtroReducer(state, action) {
    return _filtroReducer(state, action)
}