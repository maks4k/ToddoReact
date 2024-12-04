import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import ListItem from "./ListItem";

const List = () => {
  const initiolData = [
    {
      id: 1,
      title: "to drink coffe",
      done: true,
      important: true,
    },
    {
      id: 2,
      title: "to wash car",
      done: false,
      important: true,
    },
    {
      id: 3,
      title: "to do App",
      done: true,
      important: false,
    },
  ]; //масив объектов с задачами(позже пройдемся map и передадим item которые и будут в последствие объектами)

  let [tasks,setTasks]=useState(initiolData);//деструкториизация:  в initiolData положиться начальыне данные масива tasks,второй параметр функция которая будет изменять масив
  

  // const styles = {
  //   color: "black",
  //   fontWeight: "normal",
  // };
  // style={styles}

  // ${item.done ? "done" : ""}если item.done===true,то он подставит класс done иначе(else)ничего не подставит



// const items=tasks.map((item)=>(
// <ListItem item={item} key={item.id}/>//создали props item
// )

const importantHandler=(id)=>{
  const index= tasks.findIndex(element=>{
  return element.id===id
  })
  // проходиться по элементам масива и сравнивавать что item.id===айдишнику который пришел
  let newTasks=[...tasks];//распаковываем то что находиться внутри старого масива
  newTasks[index].important=!newTasks[index].important//переключаем impotant в newTasks
  setTasks(newTasks)//закидываем сюда то каким будет новый масив tasks . что бы отрендарить его
  }
  const doneHandler=(id)=>{
    const index= tasks.findIndex(element=>{
      return element.id===id
      })

   let newTasks=[...tasks];
   newTasks[index].done=!newTasks[index].done;
   setTasks(newTasks)  
  }

  const deletedItemHandler=(id)=>{
    const index= tasks.findIndex(element=>{
      return element.id===id
      })
      let newTasks=[...tasks];
      console.log(newTasks);
      
      newTasks.splice(index,1)//метод splice удаляет элементы из масива
      setTasks(newTasks);
      console.log(newTasks);
      
  }

 
const items=tasks.map((item)=>(
  <ListItem item={item} key={item.id} onDeleteItem={(id)=>deletedItemHandler(id)} onDone={(id)=>doneHandler(id)} onImportant={(id)=>importantHandler(id)}/>//создали props item
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
