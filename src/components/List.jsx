import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import ListItem from "./ListItem";

const List = ({tasks,onImportant,onDone,onDeleted}) => {
  // const styles = {
  //   color: "black",
  //   fontWeight: "normal",
  // };
  // style={styles}

  // ${item.done ? "done" : ""}если item.done===true,то он подставит класс done иначе(else)ничего не подставит



// const items=tasks.map((item)=>(
// <ListItem item={item} key={item.id}/>//создали props item
// )
const items=tasks.map((item)=>(
  <ListItem item={item} key={item.id} onDeleted={(id)=>onDeleted(id)} onDone={(id)=>onDone(id)} onImportant={(id)=>onImportant(id)}
  />//создали props
  )
)
  return (
    <ul className="list-group todo-list">
      {/* {tasks.map((elem) => (
        <li>{elem.title}</li>
      ))}1 способ вывести задачи,используя метод map */}
      {items}
      {/* достали задачи из масива и отресовали */}
    </ul>
    
    
  );
};//здесь выводяться все задачи(items)

export default List;
