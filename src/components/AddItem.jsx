import React, { useState } from "react";

function AddItem({ onAdd }) {
 const [value,setValue]=useState("");
  return (
    <div className="item-add-form d-flex">
      <input 
        onChange={(e)=>setValue(e.target.value)}
        id="addTitle"
        type="text"
        className="form-control"
        placeholder="What needs to be done"
        value={value}
      />
      <button
        onClick={()=>onAdd(value)}
        className="btn btn-outline-secondary col-3"
      >
        Add Item
      </button>
    </div>
  );
}

export default AddItem;
