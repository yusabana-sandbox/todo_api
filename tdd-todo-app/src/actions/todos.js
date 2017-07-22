import * as api from '../api'

export const fetchTodosSuccess = (todos) => {
  return {
    type: 'FETCH_TODOS_SUCCESS',
    todos // キーとバリューが一緒であれば省略可能 「todos: todos」 と同じ
  }
}

export const fetchTodos = () => (dispatch, getState) => {
  return api.fetchTodos()
          .then(res => dispatch(fetchTodosSuccess(res)))
}
