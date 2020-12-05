import React from 'react';
import './App.css';
import './assets/css/bootstrap.min.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import About from './components/About'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {

  return (
    <Router>
      <div className="app">
        <div className="app__container">
          <div className="container">
            <div className="row app__row">
              <div className="col-lg-3">

                <Sidebar />

              </div>
              <div className="col-lg-9 ">
                <div className="app__main-content">
                  <Navbar />
                  <Switch>
                    <Route exact path="/">
                      <About />
                    </Route>
                    <Route path="/resume">
                      <Resume />

                    </Route>
                    <Route path="/projects" component={Projects} />
                    <Route>
                      <Redirect to='/' />

                    </Route>
                  </Switch>

                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </Router>
  );
}

export default App;
