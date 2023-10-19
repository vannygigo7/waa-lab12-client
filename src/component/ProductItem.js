import {Link} from "react-router-dom";

export default function ProductItem(props){
    const {product, index} = props;
    return (<tr key={product.id}>
        <th scope="row">{index + 1}</th>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>{product.quantity}</td>
        <td><Link to={`/products/${product.id}`}>view</Link> </td>
    </tr>);
}