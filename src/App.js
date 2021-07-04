import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import EmployeeList from './Components/EmployeeList';


function App() {
  return (
    
    <Router >
      <Switch>
        <Route exact path="/" component={LoginPage}></Route>
        <Route path="/employee" component={EmployeeList}></Route>
      </Switch>
    </Router>

  );
}

export default App;
