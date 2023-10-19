import {Link} from "react-router-dom";

export default function NoMatchRoute(){
    return (
        <>
            <h1>Page not found</h1>
            <Link to='/'>back home</Link>
        </>
    );
}