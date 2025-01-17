import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Search from './Search';
import List from './List';
import AddItem from './AddItem';





const App=()=>{
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

  const [tasks,setTasks]=useState(initiolData);//деструкториизация:  в initiolData положиться начальыне данные масива tasks,второй параметр функция которая будет изменять масив

 
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
   setTasks(newTasks);  
  }
  const deletedItemHandler=(id)=>{
    const index= tasks.findIndex(element=>{
      return element.id===id
      })
      let newTasks=[...tasks];
      console.log(newTasks);
      
      newTasks.splice(index,1)//метод splice удаляет элементы из масива
      setTasks(newTasks); 
  }
  const done=tasks.reduce((accamulator,item)=>{
    if (item.done) {
     return accamulator+1
    }
    else{
      return accamulator;
    }
  },0)//счетчик выполненых задач в компоненет header
  const addItemHandler=(title)=>{
    alert(title)
  }

  const todo=tasks.length-done;//счетчик сколько задач необходимо выполнить

    return <div className="todo-app"><Header todo={todo} done={done}/><Search/>
    <List onDeleted={(id)=>deletedItemHandler(id)} onDone={(id)=>doneHandler(id)} onImportant={(id)=>importantHandler(id)} tasks={tasks}/><AddItem 
    onAdd={(title)=>addItemHandler(title)}/></div>
}
export default App;