import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import  'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Nave from './componentes/Nave'
import notelist from './componentes/notelist'
import createnow from './componentes/createnow'
import createuser from './componentes/createuser'





function App() {
  return (
    <Router>
      <Nave/>
      <Route path="/" exact component={notelist}/>
      <Route path="/configure" component={createnow}/>
      <Route path="/login" component={createuser}/>
    </Router>
  );
}

export default App;
