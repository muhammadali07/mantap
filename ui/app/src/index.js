import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './views/Login'
import Register from './views/Register'
import './assets/css/App.css';

// import App from "./App";

// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// );

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Login/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


ReactDOM.render(<App />, document.getElementById("root"));