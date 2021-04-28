import React from "react";

const ProductFilterWidget = (props) => {

    return (
        <div>
            <h1>{props.title}</h1>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Company Name" />
            <input type="text" placeholder="Uses" />
            <button>Search</button>
        </div>
    )
}

export default ProductFilterWidget;