import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Search from "./Search";
import List from "./List";
import AddItem from "./AddItem";
import Filter from "./Filter";

const App = () => {
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

  const [tasks, setTasks] = useState(initiolData); //деструкториизация:  в initiolData положиться начальыне данные масива tasks,второй параметр функция которая будет изменять масив
  const [filter,setFilter]=useState(0);//фильтер отоброжение -перендеринга кнопок и задач  
  const [searchValue, setSearchValue] = useState("");//стейтовая перменная под search

  const importantHandler = (id) => {
    const index = tasks.findIndex((element) => {
      return element.id === id;
    });
    // проходиться по элементам масива и сравнивавать что item.id===айдишнику который пришел
    let newTasks = [...tasks]; //распаковываем то что находиться внутри старого масива
    newTasks[index].important = !newTasks[index].important; //переключаем impotant в newTasks
    setTasks(newTasks); //закидываем сюда то каким будет новый масив tasks . что бы отрендарить его
  };
  const doneHandler = (id) => {
    const index = tasks.findIndex((element) => {
      return element.id === id;
    });

    let newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };
  const deletedItemHandler = (id) => {
    const index = tasks.findIndex((element) => {
      return element.id === id;
    });
    let newTasks = [...tasks];

    newTasks.splice(index, 1); //метод splice удаляет элементы из масива
    setTasks(newTasks);
  };
  const done = tasks.reduce((accamulator, item) => {
    if (item.done) {
      return accamulator + 1;
    } else {
      return accamulator;
    }
  }, 0); //счетчик выполненых задач в компоненет header

  const todo = tasks.length - done; //счетчик сколько задач необходимо выполнить

  const addItemHandler = (title) => {
    const id = tasks[tasks.length - 1].id + 1; //получаем id для нового task
    const newTask = { id: id, title: title, done: false, important: false }; //сформировали объект с обновленном id
    const newTasks = [...tasks]; //создаем копию масива объектов(...распаковывваем типо его)
    newTasks.push(newTask); //запушиваем в распакованый масимв,новый масив и меня ниже стейтовую переменную
    setTasks(newTasks);
  };
  
  const onSearch = (value) => {
    setSearchValue(value);
  };
  const filterHandler = (type=0) => {
    let newTasks, filterTasks;
    
    switch (type) {
      case 0:
        return tasks;
      case 1:
        newTasks = [...tasks];
        filterTasks = newTasks.filter((element) => {
          return element.done === false;
        });
        return filterTasks;
      case 2:
        newTasks = [...tasks];
        filterTasks = newTasks.filter((element) => {
          return element.done === true;
        });
        return filterTasks;
      default:
        return tasks;
    }
  };

 const filteredTasks=filterHandler(filter).filter((task) =>
  task.title.toLowerCase().includes(searchValue.toLowerCase())
);//усовершенсвенная фильтрация под строку поиска задач
  return (
    <div className="todo-app">
      <Header todo={todo} done={done} />
      <div className="top-panel d-flex">
      <Search onSearch={onSearch}/>
      <Filter onFilter={(type) =>{setFilter(type)}}/>
      </div>
      <List
        onDeleted={(id) => deletedItemHandler(id)}
        onDone={(id) => doneHandler(id)}
        onImportant={(id) => importantHandler(id)}
        tasks={filteredTasks}
      />
      <AddItem onAdd={(title) => addItemHandler(title)} />
    </div>
  );
};
export default App;
