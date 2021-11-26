import "./App.css";

import { Route, Routes, Link } from "react-router-dom";
import page1 from "./page1";

function App() {
  return (
    <>
      <nav className="navbar">
        <ul>
    <Link to="/"  className="link"><li> home </li></Link>
    <Link to="/page1" className="link"><li> cadastro </li></Link>
        
        
      
        </ul>
        </nav>
      <Routes>
        <Route path="/page1" exact element={page1} />
      </Routes>
    </>
  );
}

export default App;
