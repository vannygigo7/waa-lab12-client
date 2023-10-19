import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ProductService from "../service/ProductService";
import ResponseMessage from "./ResponseMessage";

export default function ProductUpdate(){
    const navigate = useNavigate();
    const [responseStatus, setResponseStatus] = useState(null);
    const [originalProduct, setOriginalProduct] = useState(null);
    const {id} = useParams();
    let tempProduct = {};


    useEffect(()=>{
        (async ()=>{
            ProductService.get(id)
                .then((response)=> {
                    console.log("ProductService.get(id)");
                    console.log(response);
                    setOriginalProduct(response.data);
                })
                .catch((e)=> {
                    console.log(e);
                });
        })();
    }, [id]);

    if(!originalProduct){
        return <p>Product is not found.</p>
    }else{
        tempProduct = originalProduct;
    }
    function goHome (){
        navigate('/');
    }
    function deleteProduct(){
        ProductService.remove(id)
            .then((response)=> {
                console.log(response);
            })
            .catch((e)=> {
                console.log(e);
            });
        goHome()
    }

    function updateProduct(){
        ProductService.update(id, tempProduct)
            .then((response)=> {
                console.log("ProductService.update(id, currentProduct)");
                console.log(response);
                setResponseStatus(true);
            })
            .catch((e)=> {
                setResponseStatus(false);
                console.log(e);
            });
        // goHome();
    }

    const changedHandler = (e)=>{
        const {name, value} = e.target;
        tempProduct[name] = value;
    }

    return (
        <div style={{width:'500px'}}>
            <p>Title: {originalProduct.title}</p>
            <p>Price: {originalProduct.price}</p>
            <p>Quantity: {originalProduct.quantity}</p>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input onChange={changedHandler} name='title' defaultValue={originalProduct.title}  className="form-control" placeholder="Title"/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input onChange={changedHandler} name='price' defaultValue={originalProduct.price}  className="form-control" placeholder="Price"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Quantity</label>
                    <input onChange={changedHandler} name='quantity' defaultValue={originalProduct.quantity}  className="form-control" placeholder="Quantity"/>
                </div>
            <button className="btn btn-default" onClick={goHome}>Cancel</button>
            <button className="btn btn-danger" onClick={deleteProduct}>Delete</button>
            <button className="btn btn-primary" onClick={updateProduct}>Update</button>
            <ResponseMessage status={responseStatus}/>
        </div>
    );
}