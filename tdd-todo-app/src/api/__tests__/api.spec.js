// from に名前を書かなければデフォルトでindexを読む
// import * as api from 'aaa' この書き方の意味
import * as api from '../'

describe('api', () => {
  describe('fetchTodos', () => {
    const todos = [
      {
        id: 1,
        title: 'todo1'
      }
    ]

    it('returns response', () => {
      return api.fetchTodos().then(res => {
        expect(res).toEqual(todos)
      })
    })
  })
})
