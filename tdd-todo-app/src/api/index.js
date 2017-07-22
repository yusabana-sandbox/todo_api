import client from './client'

export const fetchTodos = () => {
  return client.get('/todos')
}
