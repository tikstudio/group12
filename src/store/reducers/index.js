import {ADD_TODO, CHANGE_FILTER, DELETE_TODO, DONE_TODO} from "../actions";

const initialState = {
  list: [],
  fullList: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const list = [...state.list, {
        id: (new Date()).getTime(),
        name: action.payload.name,
        done: false,
      }];
      return {...state, list, fullList: list}
    }
    case DONE_TODO: {
      const list = state.list.map((item) => {
        if (item.id === action.payload.id) {
          item.done = !item.done;
        }
        return item
      });
      return {...state, list, fullList: list}
    }
    case DELETE_TODO: {
      const list = state.list.filter((item) => item.id !== action.payload.id)
      return {...state, list, fullList: list};
    }
    case CHANGE_FILTER: {
      const {name} = action.payload;
      const list = state.fullList.filter((item) => {
        if (name === 'all') {
          return true
        } else if (name === 'done') {
          return item.done === true
        } else if (name === 'not_done') {
          return item.done === false
        }
      });
      return {...state, list};
    }
    default: {
      return state;
    }
  }
}
