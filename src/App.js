import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import TodoPage from './pages/TodoPage';
import ShowPage from './pages/ShowPage';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={TodoPage} />
          <Route path='/:id' component={ShowPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
