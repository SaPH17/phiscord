import React from "react"
import "./Home.sass"
import Navbar from "./navbar/Navbar"
import Friends from "./friends/Friends"
import { Switch, Route } from "react-router-dom"

const Home = () => {
	return (
		<div className="homepage-container">
			<Navbar></Navbar>
			<Switch>
				<Route exact path="/home/online">
					<Friends type="online"></Friends>
				</Route>
				<Route path="/home/all">
					<Friends type="all"></Friends>
				</Route>
				<Route path="/home/blocked">
					<Friends type="blocked"></Friends>
				</Route>
			</Switch>
		</div>
	)
}

export default Home
