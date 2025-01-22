import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Search = ({onSearch}) => {
  const[value,setValue]=useState("");//делаем контролируеммый  инпут
  return (
      <input
        onChange={(e)=>{setValue(e.target.value);
        onSearch(e.target.value)}}//e.target.value что бы приходило без опоздания акуальная информация
        value={value}
        type="text"
        placeholder="Type to search"
        className="form-control search-input"
      />
  );
};

export default Search;
