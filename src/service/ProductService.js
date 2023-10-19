import http from '../api/Http';

const endpoint = '/products';
const getAll = () =>{
   return   http.get(endpoint);
}

const get = (id) =>{
    return   http.get(`${endpoint}/${id}`);
}

const add = (data) =>{
    return   http.post(endpoint, data);
}

const update = (id, data) =>{
    return   http.put(`${endpoint}/${id}`, data);
}

const remove = (id) =>{
    return   http.delete(`${endpoint}/${id}`);
}

const ProductService = {
    getAll,
    get,
    add,
    update,
    remove
};

export default ProductService;