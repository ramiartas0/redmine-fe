import './App.css';
import Home from './component/HomePage';
import Login from "./component/Login";
import Register from "./component/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import withAuth from './withAuth';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/home" element={<Home />} />
          </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
