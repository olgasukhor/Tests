import './App.css';
import React, { useEffect } from "react";
import ResponsiveDrawer from './views/NavigationUI'
import { BrowserRouter, useLocation } from "react-router-dom";
import RouterPages from './components/RouterPages'
import Footer from './views/Footer';
import Partners from './components/Partners';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <BrowserRouter>
          <ScrollToTop />
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






