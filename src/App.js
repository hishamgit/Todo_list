import React from 'react';
import './App.css';
import { useState } from 'react';
function App() {
  const [toDos, setTodos] = useState([])         //array of strings
  const [toDo, setTodo] = useState('')          //empty string since single state
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setTodos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>            {/* use of spread operator */}
      </div>
      <div className="todos">
        {
          
          toDos.map((object) => {
            return (
              <div className="todo">
                <div className="left">
                  <input onChange={(e) => {
                    console.log(e.target.value)
                    console.log(object)
                    setTodos(toDos.filter(obj => {     // filter creates new array
                      if (obj.id === object.id) {
                        obj.status = e.target.checked   //not e.target.value
                      }
                      return obj
                    }))
                  }} value={object.status} type="checkbox" name="" id="" />
                  <p>{object.text}</p>
                </div>
                <div className="right">
                  <i className="fas fa-times"></i>
                </div>
              </div>
            )
          })
        }
        {
          toDos.map((obj) => {
            if (obj.status) {
              return (<h1>{obj.text}</h1>)
            }
            return null
          })
        }

      </div>
    </div>
  );
}

export default App;