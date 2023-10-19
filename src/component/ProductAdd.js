import {useNavigate} from "react-router-dom";
import ProductService from "../service/ProductService";
import {useState} from "react";
import ResponseMessage from "./ResponseMessage";

export default function ProductAdd(){
    const navigate = useNavigate();
    const [responseStatus, setResponseStatus] = useState(null);
    const tempProduct = {};

    function saveProduct(){
        console.log(tempProduct);
        ProductService.add(tempProduct)
            .then((response)=> {
                console.log(response);
                setResponseStatus(true);
            })
            .catch((e)=> {
                setResponseStatus(false);
                console.log(e);
            });
    }
    function goHome (){
        navigate('/');
    }
    const changedHandler = (e)=>{
        const {name, value} = e.target;
        tempProduct[name] = value;
    }

    return (
        <div style={{width:'500px'}}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input onChange={changedHandler} name='title'  className="form-control" placeholder="Title"/>
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input onChange={changedHandler} name='price' className="form-control" placeholder="Price"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Quantity</label>
                <input onChange={changedHandler} name='quantity' className="form-control" placeholder="Quantity"/>
            </div>
            <button className="btn btn-default" onClick={goHome}>Cancel</button>
            <button className="btn btn-primary" onClick={saveProduct}>Save</button>
            <ResponseMessage status={responseStatus}/>
        </div>
    );
}