import Navbar from './components/navbar/Navbar.js'
import Conversation from './components/conversation/Conversation.js'
import ProfilePanel from './components/profile-panel/ProfilePanel'
import './App.sass'

const App = () => {
  return (
    <div className="container">
      <Navbar/>
      <div className="sidebar-container">
        <div className="sidebar-content-container">
          <Conversation/>
        </div>
        <ProfilePanel/>
      </div>
    </div>
  )
}

export default App