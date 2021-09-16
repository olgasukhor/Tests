import './App.css';
import React from "react";
import ResponsiveDrawer from './views/NavigationUI'
import { BrowserRouter } from "react-router-dom";
import RouterPages from './components/RouterPages'
import Footer from './views/Footer';
import Partners from './components/Partners';


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
