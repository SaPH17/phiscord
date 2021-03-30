import { Switch, Route } from "react-router-dom"
import Conversation from "./conversation/Conversation"
import Channel from "./channel/Channel"

const Sidebar = () => {
	return (
		<>
			<Switch>
				<Route path="/home">
					<Conversation />
				</Route>
				<Route path="/conversation">
					<Conversation />
				</Route>
				<Route path="/server">
					<Channel />
				</Route>
			</Switch>
		</>
	)
}

export default Sidebar
