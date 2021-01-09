import { Route, Switch ,Redirect} from 'react-router-dom';
import './App.css';
import Home from './container/Home'
import Create from './container/Create'
import View from './container/View'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/create' component={Create}/>
      <Route exact path='/view' component={View}/>
      <Redirect from='*' to='/' />
      </Switch>
    </div>
  );
}

export default App;
