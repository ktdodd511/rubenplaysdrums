import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import AppNavbar from './components/layout/AppNavbar';
import MainPage from './components/layout/MainPage';
import News from './components/music/News';
import Music from './components/music/Music';
import Video from './components/music/Video';
import Schedule from './components/music/Schedule';
import Contact from './components/contact/Contact';


function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={MainPage}/>
              <Route exact path="/news" component={News}/>
              <Route exact path="/music" component={Music}/>
              <Route exact path="/video" component={Video}/>
              <Route exact path="/schedule" component={Schedule}/>
              <Route exact path="/contact" component={Contact}/>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
