
import { useNavigate} from 'react-router-dom';
import { useEffect, useState} from "react";
import ProductService from "../service/ProductService";
import ProductItem from "./ProductItem";
export default function ProductList(){
    const navigate = useNavigate();
    let [products, setProducts] = useState([]);

    useEffect(()=>{
        (async () => {
            let response =  await  ProductService.getAll();
            console.log(response);
            if(response.status === 200){
                setProducts(response.data);
            }
        })();
    }, []);

    const newProduct = ()=>{
        navigate('/products/add');
    }

    return (
        <div style={{width:'800px'}}>
            <button className="btn btn-primary" onClick={newProduct}>New</button>
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product, index) =>
                    <ProductItem key={product.id} {...{index, product}}/>
                )}
                </tbody>
            </table>
        </div>
    );
}