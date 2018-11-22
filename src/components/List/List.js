import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../../actions'

const List = (props) => {
  console.log(props);
  return (
    <ul>
      {props.todos.map((todo, index) => (
        // when you map over something you gotta give the something you return a key prop that's unique
        <li key={index}>
        <span>{todo.text}</span>
        <button onClick={() => props.dispatch(deleteTodo(todo.id))}>Delete</button>
          
        </li>
      ))}
    </ul>
  )
}

// need to get data from the state
const mapStateToProps = (state) => ({
  todos: state.todos.data
})

export default connect(mapStateToProps)(List)