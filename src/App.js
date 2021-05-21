import './App.css';
import Home from './views/Home';
import Login from './views/Login';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
          <Route exact path="/" component={Login}/>
          <Route exact path="/home" component={Home}/>
      </div>
    </Router>
  );
}

export default App;
