import React, { useState } from "react";
import Base from "../core/Base";

const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState("");

  const onChangeHandler = (event) => {
    setCategoryName(event.target.value);
  };

  return (
    <Base>
      <div className="m-5">
        <label className="form-label">Enter Category Name.</label>
        <p className="text-muted">Category name must be less then 100 characters.</p>
        <input type="text" id="categoryName" onChange={onChangeHandler} className="form-control mt-2 mb-2" />
        <button className="btn btn-primary btn-lg mt-2 mb-2">Save</button>
      </div>
    </Base>
  );
};

export default CreateCategory;
