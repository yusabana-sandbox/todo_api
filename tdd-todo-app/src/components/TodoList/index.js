import React, { Component } from 'react'

// ステートレスなコンポーネントの書き方(ライフサイクルのメソッドを使いたいため)
//   componentDidMount などのライフサイクルメソッド
// class TodoList extends Component {
// }
class TodoList extends Component {
  componentDidMount() {
    this.props.actions.fetchTodos()
  }

  render() {
    const { todos } = this.props

    return (
      <ul className="todo-list">
        { todos.map(todo => <li key={todo.id}>{todo.title}</li>) }
      </ul>
    )
  }
}

// // functionalなコンポーネントの書き方。Componentのライフサイクルと関係ない時はこの書き方でOK
// const TodoList = ({ todos }) => (
//   <ul className="todo-list">
//     { todos.map(todo => <li key={todo.id}>{todo.title}</li>) }
//   </ul>
// )

export default TodoList
