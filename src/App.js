import Navbar from "./components/navbar/Navbar.js"
import ProfilePanel from "./components/sidebar/profile-panel/ProfilePanel"
import Sidebar from "./components/sidebar/Sidebar"
import Home from "./components/home/Home"
import Server from "./components/server/Server"
import Conversation from "./components/conversation/Conversation"
import CreateServer from "./components/modal/CreateServer"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import styles from "./App.module.sass"
import { useState } from "react"

const App = () => {
	const [visible, setVisible] = useState(false)

	const showModal = () => {
		setVisible(true)
	}

	const hideModal = () => {
		setVisible(false)
	}

	return (
		<>
			<CreateServer visible={visible} hideModal={hideModal}></CreateServer>
			<div className={styles.container}>
				<BrowserRouter>
					<div className={styles.navbarContainer}>
						<Navbar showModal={showModal} visible={visible} />
					</div>
					<div className={styles.contentContainer}>
						<div className={styles.sidebarContainer}>
							<div className={styles.sidebar}>
								<Sidebar />
							</div>
							<ProfilePanel />
						</div>
						<div className={styles.content}>
							<Switch>
								<Route exact path="/">
									<Redirect to="/home/online"></Redirect>
								</Route>
								<Route exact path="/home">
									<Redirect from="/home" to="/home/online"></Redirect>
								</Route>
								<Route exact path="/home/conversation">
									<Conversation></Conversation>
								</Route>
								<Route path="/home">
									<Home></Home>
								</Route>
								<Route path="/server">
									<Server></Server>
								</Route>
							</Switch>
						</div>
					</div>
				</BrowserRouter>
			</div>
		</>
	)
}

export default App
