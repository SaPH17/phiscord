import Navbar from './components/navbar/Navbar.js'
import Conversation from './components/conversation/Conversation.js'
import ProfilePanel from './components/profile-panel/ProfilePanel'
import {Switch,Route,BrowserRouter} from 'react-router-dom'
import './App.sass'

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar/>
        <div className="sidebar-container">
          <div className="sidebar-content-container">
            <Switch>
              <Route exact path="/">
                <Conversation/>
              </Route>
              <Route path="/server">
                
              </Route>
            </Switch>
          </div>
          <ProfilePanel/>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App