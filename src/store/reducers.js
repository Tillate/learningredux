import * as actions from "./actions";
// {
//   todos: {
//    data: [],
//    loading: false,
//    error: null
// },
//     filter: 'SHOW_ALL'
// }
// {
//     name: '',
//     done: true
// }
export const todos = (
  state = {
    data: [],
    loading: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case actions.ADD_TODO: {
      return {
        ...state,
        data: [...state, action.todo],
      };
    }

    case actions.DELETE_TODO: {
      return {
        ...state,
        data: state.filter((t, i) => i !== action.index),
      };
    }

    case actions.TOGGLE_TODO: {
      return {
        ...state,
        data: state.map((t, i) =>
          i === action.index ? { ...t, done: !t.done } : t
        ),
      };
    }
    case actions.REQUEST_TODO: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.FETCH_TODO_SUCCESS: {
      if (action.todos) {
        return {
          ...state,
          data: [...state.data, action.todos],
          loading: false,
          error: null,
        };
      } else {
        return {
          ...state,
          loading: false,
        };
      }
    }
    case actions.FETCH_TODO_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};

export const filter = (state = actions.visibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case actions.SET_FILTER: {
      return action.filter;
    }
    default: {
      return state;
    }
  }
};

// export const todosReducer = (state, action) => {
//   return {
//     todos: todoReducer(state.todos, action),
//     filter: filterReducer(state.filter, action),
//   };
// };
// OU
// export const todosReducer = combineReducers ({
//     todos: todoReducer,
//     filter: filterReducer
// })
// OU
