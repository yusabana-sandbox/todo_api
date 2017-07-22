// from に名前を書かなければデフォルトでindexを読む
// import * as api from 'aaa' この書き方の意味
import MockAdapter from 'axios-mock-adapter'
import * as api from '../'
import client from '../client'

describe('api', () => {
  describe('fetchTodos', () => {
    const mock = new MockAdapter(client) // テストはMockでやる
    const todos = [
      {
        id: 1,
        title: 'todo1'
      }
    ]

    it('returns response', () => {
      mock.onGet('/todos')
          .reply(200, todos)

      return api.fetchTodos().then(res => {
        expect(res).toEqual(todos)
      })
    })
  })
})
