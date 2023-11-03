import React from 'react'


function TodoList(props) {
  return (
    <li><button onClick={() => {
        props.onSelect(props.id)
    }}> - </button>{props.text} </li>
  )
}

export default TodoList