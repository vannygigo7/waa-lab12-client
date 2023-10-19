
import './App.css';
import {BrowserRouter} from "react-router-dom";
import MyRoute from "./component/MyRoute";

function App() {
  return (
    <BrowserRouter>
        <MyRoute/>
    </BrowserRouter>
  );
}

export default App;
