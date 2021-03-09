import Navbar from "./components/navbar/Navbar.js"
import ProfilePanel from "./components/profile-panel/ProfilePanel"
import Sidebar from "./components/sidebar/Sidebar"
import { BrowserRouter } from "react-router-dom"
import "./App.sass"

const App = () => {
	return (
		<div className="container">
			<BrowserRouter>
				<div className="navbar-container">
					<Navbar />
				</div>
				<div className="content-container">
					<div className="sidebar-container">
						<div className="sidebar-content-container">
							<Sidebar />
						</div>
						<ProfilePanel />
					</div>
					<div className="content"></div>
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App
