import * as actions from "./actions";
// {
//     todos: [],
//     filter: ''
// }
// {
//     name: '',
//     done: true
// }
export const todos = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TODO: {
      return [...state, action.todo];
    }

    case actions.DELETE_TODO: {
      return state.filter((t, i) => i !== action.index);
    }

    case actions.TOGGLE_TODO: {
      return state.map((t, i) => {
        if (i === action.index) {
          t.done = !t.done;
        }
        return t;
      });
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
