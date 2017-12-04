import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import R2d2 from './R2d2';
import C3p0 from './C3p0';

const RouterLinks = () => (
  <Router>
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/c3p0">C-3P0</Link></li>
    </ul>

    <Route path="/" component={R2d2}/>
    <Route path="/c3p0" component={C3p0}/>
  </div>
</Router>
)

export default RouterLinks
