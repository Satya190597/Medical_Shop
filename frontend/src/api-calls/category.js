const getAllCategory = () => {
    return fetch("http://localhost:4001/api/category/all/",{
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(error => {
        return error;
    })
}

export {getAllCategory}