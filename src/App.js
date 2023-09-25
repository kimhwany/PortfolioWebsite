import { Route} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import { Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Resume from "./components/resume";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
    <Preloader load={load} />
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <NavBar/>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Resume" component={Resume} />
      </Switch>
    </div>
    </main>
  );
}

export default App;