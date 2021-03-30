import React from "react"
import styles from "./Home.module.sass"
import Navbar from "./navbar/Navbar"
import Friends from "./friends/Friends"
import AddFriend from "./add-friends/AddFriend"
import { Switch, Route } from "react-router-dom"

const Home = () => {
	return (
		<div className={styles.container}>
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
				<Route path="/home/add-friends">
					<AddFriend></AddFriend>
				</Route>
			</Switch>
		</div>
	)
}

export default Home
