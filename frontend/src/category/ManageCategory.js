import React, { useEffect, useState } from "react";
import Base from "../core/Base";
import { getAllCategory } from "../api-calls/category";

const ManageCategory = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
      getAllCategory()
      .then(response => {
          setCategoryList(response)
      })
      .catch(error => {
          console.log(error)
      })
  };

  return (
    <Base>
      <div>Manage Category</div>
      <ul>
      {
          categoryList.map(element => {
              return(
                  <li key={element.CATEGORY_ID}>{element.CATEGORY_NAME}</li>
              )
          })
      }
      </ul>
    </Base>
  );
};

export default ManageCategory;
