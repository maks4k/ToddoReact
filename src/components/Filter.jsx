import React, { useState } from 'react'

const Filter = ({onFilter}) => {
    const [active, setActive] = useState(0);
    const btns = ["all", "active", "done"];
  //ниже генерируем кнопки с помощью map
    const btnsOut = btns.map((element, index) =>
       (
        active === index ?
        <button
          onClick={() => setActive(index)}
          key={index}
          type="button"
          className="btn btn-info"
        >
          {element}
        </button>
       : 
        <button
          onClick={() => {setActive(index);onFilter(index)}}
          key={index}
          type="button"
          className="btn btn-outline-secondary"
        >
          {element}
        </button>)
      
    )//меняем состояние кнопок ,если индекс равено 0 то отрисовывай кнопку со стилями инфо ,иначе с другими стилями
  return (
    <div className="btn-group">
    {btnsOut}
  </div>
  )
}

export default Filter