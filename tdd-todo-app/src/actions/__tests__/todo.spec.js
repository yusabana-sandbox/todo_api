import * as actions from '../todos'

describe('todos action', () => {
  const todos = [
    {
      id: 1,
      title: 'todo1',
    },
  ]

  describe('action creator', () => {
    test('create FETCH_TODOS_SUCCESS', () => {
      expect(actions.fetchTodosSuccess(todos)).toEqual({
        type: 'FETCH_TODOS_SUCCESS',
        todos
      })
    })
  })

  describe('fetchTodos', () => {
    test('return action', () => {
      expect(actions.fetchTodos()).toEqual({
        type: 'FETCH_TODOS_SUCCESS',
        todos,
      })
    })
  })
})
