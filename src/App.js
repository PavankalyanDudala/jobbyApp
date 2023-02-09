import './App.css'
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom'
import Login from './component/Login'
import Home from './component/Home'
import Jobs from './component/Jobs'
import NotFound from './component/NotFound'
import JobItemDetails from './component/JobItemDetails'
import ProtectedRoute from './component/ProtectedRoute'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/jobs" component={Jobs} />
      <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
