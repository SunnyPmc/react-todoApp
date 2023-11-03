import { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [list, setList] = useState('')
  const [items, setItems] = useState([])

  const onChange = (e) => {
    setList(e.target.value)
  }
  const listOfItems = () => {
    setItems((prevItems) => {
      return [...prevItems, list]
    })
    setList('')
  }

  const deleteItems = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((arrEl, index) => {
         return index !== id
      })
    })
  }

  
  
  return (
    <div className="main_div">
      <div className="centre_div">
        <br />
        <h1>Todo List</h1>
        <br />
        <input type="text" placeholder="Enter todo" value={list} onChange={onChange} />
        <button onClick={listOfItems}> + </button>
        <ol>
          {items.map((item, index) => {
            return <TodoList text={item} id={index} key={index}
            onSelect={deleteItems} />
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
