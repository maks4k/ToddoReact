import React, {  } from "react";

// const ListItem = ({item}) приняли props из компоненнта LIst что бы он увидел переменную item
const ListItem = ({ item, onDeleted,onDone,onImportant}) => {
  // let [tasks,setTasks]=useState(initiolData);//деструкториизация:  в initiolData положиться начальыне данные масива tasks,второй параметр функция которая будет изменять масив

  return (
    <li className="list-group-item">
      <span
       className={`todo-list-item ${item.done ? "done" : ""} ${
        item.important ? "important" : ""}`}>

<span  onClick={()=>onDone(item.id)} className="todo-list-item-label">
          {item.title}
          {/* ввыдоим каждую задачу по ключу */}
        </span>
        <button
          onClick={() =>onImportant(item.id)}
          type="button"
          className="btn btn-outline-success btn-sm float-end"
        >
          <i className="fa fa-exclamation"></i>

        </button>
        <button
          onClick={() => onDeleted(item.id)}
          type="button"
          className="btn btn-outline-danger btn-sm float-end"
        >
          <i className="fa fa-trash"></i>
        </button>
      </span>
    </li>
  );
};

export default ListItem;
