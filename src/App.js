import './App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from './components/pages/Register'
import Login from './components/pages/Login'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </Router>
  )
}

export default App
