import React, { useState,useEffect } from "react";
import {getAllCategory} from "../api-calls/category";

const ProductForm = () => {
  const [categoryList, setCategoryList] = useState([]);

  const getCategoryList = function() {
    getAllCategory().then(response => {
        setCategoryList(response)
    })
  }

  useEffect(() => {
    getCategoryList();
  },[])


  return (
    <div>
      <form>
        <div>
          <div>
            <label>Product Name</label>
          </div>
          <div>
            <input type="text" name="productName" />
          </div>
        </div>
        <div>
          <div>
            <label>Product Category</label>
          </div>
          <div>
            <select>
                {
                    categoryList.map(element => {
                        return <option key={element.CATEGORY_ID} value={element.CATEGORY_ID}>{element.CATEGORY_NAME}</option>
                    })
                }
            </select>
          </div>
        </div>
        <div>
          <div>
            <label>Product Uses</label>
          </div>
          <div>
            <input type="text" name="productUses" />
          </div>
        </div>
        <div>
          <div>
            <label>Product Description</label>
          </div>
          <div>
            <textarea></textarea>
          </div>
        </div>
        <div>
          <div>
            <label>Product Company Name</label>
          </div>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          <div>
            <label>Product Price</label>
          </div>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          <div>
            <label>Product Discount</label>
          </div>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          <div>
            <label>Product Location In Store</label>
          </div>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          <div>
            <label>Date Of Validity In Months </label>
          </div>
          <div>
            <input type="text" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
