import './App.css';
import React from "react";
import ResponsiveDrawer from './NavigationUI'
import { BrowserRouter } from "react-router-dom";
import RouterPages from './RouterPages'
import Footer from './views/Footer';
import Partners from './Partners';


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <BrowserRouter>
          <ResponsiveDrawer />
          <div className="App-inner">
            <RouterPages />
            < Partners />
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App;
