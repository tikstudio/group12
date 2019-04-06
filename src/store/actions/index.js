export const ADD_TODO = 'ADD_TODO';
export const DONE_TODO = 'DONE_TODO';
export const DELETE_TODO = 'DELETE_TODO';


export const CHANGE_FILTER = 'CHANGE_FILTER';

export function addToDo(name) {
  return {
    type: ADD_TODO, payload: {name}
  }
}

export function doneToDo(id) {
  return {
    type: DONE_TODO, payload: {id}
  }
}

export function deleteToDo(id) {
  return {
    type: DELETE_TODO, payload: {id}
  }
}

export function changeFilter(name) {
  return {
    type: CHANGE_FILTER, payload: {name}
  }
}
