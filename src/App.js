import React, { useEffect } from "react";
import './index.css'
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BreakFast from "./components/breakfast";
import Lunch from "./components/lunch";
import Shakes from "./components/shakes";
import All from "./components/all";
import menu from "./components/api";
function App() {
  const allData = menu;
  useEffect(() => {
    if(window.location.pathname !== '/'){
      window.location.pathname = '/';
    }
  }, [])
  return (
    <Router>
      <div className="main-div">
        <div>
          <h1 className="main-heading">Our Menu</h1>
          <div className="underline">
          </div>
          <div className="nav-div">
            <Navbar />
          </div>
          <div className="item-section row">
            <Routes>
              <Route path="/" element={allData.map((all) => (
                <div className="col-md-4">
                  <All key={all.id} title={all.title} category={all.category} price={all.price} image={all.img} desc={all.desc} />
                </div>
              ))} />
              <Route path="/breakfast" element={allData.filter((bre) => bre.category === 'breakfast').map((bre2) =>
                <div className="col-md-4">
                  <BreakFast key={bre2.id} title={bre2.title} category={bre2.category} price={bre2.price} image={bre2.img} desc={bre2.desc} />
                </div>
              )} />
              <Route path="/lunch" element={allData.filter((lun) => lun.category === 'lunch').map((lun2) => 
                <div className="col-md-4">
                  <Lunch key={lun2.id} title={lun2.title} category={lun2.category} price={lun2.price} image={lun2.img} desc={lun2.desc}/>
                </div>
              )} />
              <Route path="/shakes" element={allData.filter((sha) => sha.category === 'shakes').map((sha2) =>
                <div className="col-md-4">
                  <Shakes key={sha2.id} title={sha2.title} category={sha2.category} price={sha2.price} image={sha2.img} desc={sha2.desc}/>
                </div>
              )} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
