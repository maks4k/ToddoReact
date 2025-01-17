import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Search = ({onFilter}) => {
  const [active, setActive] = useState(0);
  const btns = ["all", "active", "done"];

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
        onClick={() => {setActive(index);onFilter(active)}}
        key={index}
        type="button"
        className="btn btn-outline-secondary"
      >
        {element}
      </button>)
    
  ); //меняем состояние кнопок ,если индекс равено 0 то отрисовывай кнопку со стилями инфо ,иначе с другими стилями

  return (
    <div className="top-panel d-flex">
      <input
        type="text"
        placeholder="Type to search"
        className="form-control search-input"
      />
      <div className="btn-group">
        {/* <button type="button" className="btn btn-info">
          All
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Active
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Done
        </button> */}
        {btnsOut}
      </div>
    </div>
  );
};

export default Search;
