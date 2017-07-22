export const fetchTodosSuccess = (todos) => {
  return {
    type: 'FETCH_TODOS_SUCCESS',
    todos // キーとバリューが一緒であれば省略可能 「todos: todos」 と同じ
  }
}

export const fetchTodos = () => {
  const todos = [
    {
      id: 1,
      title: 'todo1',
    }
  ]

  return fetchTodosSuccess(todos)
}
