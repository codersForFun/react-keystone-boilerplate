import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <Link to="/hola">Hola</Link>
    <Link to="/welcome">Welcome</Link>
    { children }
  </div>
);

App.propTypes = { children: React.PropTypes.object };

export default App;
