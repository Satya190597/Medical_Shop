const getAllProduct = () => {
    return fetch("http://localhost:4001/api/product/all",{
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(error => {
        return error;
    })
}

export {getAllProduct}