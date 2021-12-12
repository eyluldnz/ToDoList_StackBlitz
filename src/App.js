import React from 'react';
import { useState } from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem';

const toDoItems = [
  { id: 1, title: 'title1', isCompleted: false },
  { id: 2, title: 'title2', isCompleted: true },
  { id: 3, title: 'title3', isCompleted: false },
  { id: 4, title: 'title5', isCompleted: true },
  { id: 5, title: 'title6', isCompleted: false },
];

function App() {
  const [itemToDo, setToDoItem] = useState(toDoItems);

  const formSubmitHandler = (e) => {
    e.preventDefault(); //avoid refresh page

    if (!!e.target[0].value) {
      const newItem = {
        id: itemToDo.length + 1,
        title: e.target[0].value,
        isCompleted: false,
      };
      setToDoItem([newItem, ...itemToDo]);
      e.target[0].value = '';
    }
  };

  return (
    <div classNameName="container">
      <div classNameName="row">
        <div classNameName="col-sm-8 offset-sm-2">
          <form className="mb-3" onSubmit={formSubmitHandler}>
            <div className="mb-3">
              <label htmlFor="todoItem" className="form-label">
                Yapılacaklar listesi
              </label>

              <input
                type="text"
                className="form-control"
                name="todoItem"
                id="todoItem"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div classNameName="col-sm-8 offset-sm-2">
          <ul classNameName="list-group">
            {
              //filter(item=>item.isCompleted)
              //${item.isCompleted &&"text-decoration-line-through bg-success text-light"}
              itemToDo.map((item) => (
                <ToDoItem
                  item={item}
                  setToDoItems={setToDoItem}
                  toDoItem={itemToDo}
                  key={item.id}
                />
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
