import React from 'react';
function ToDoItem(props) {
  const { item, setToDoItems, toDoItem } = props;

  const changeCompletedHandler = (e) => {
    let newItems = toDoItem.map((data) => {
      if (data.id === item.id) {
        data.isCompleted = !item.isCompleted;
      }
      return data;
    });
    setToDoItems(newItems);
  };

  return (
    <li
      className={`list-group-item ${
        item.isCompleted
          ? 'text-decoration-line-through bg-success text-light'
          : ' text-decoration-none'
      }`}
      onClick={changeCompletedHandler}
      key={props.key}
    >
      {props.item.title}
    </li>
  );
}
export default ToDoItem;
