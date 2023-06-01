import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Basket from "./Pages/Basket";
import Login from "./Pages/Login";
import Notfound from "./Pages/Notfound";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header />
          <Routes>
            <Route path="*" element={<Notfound/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/Registration" element={<Registration/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Basket" element={<Basket/>}/>
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
