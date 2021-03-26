import React from "react"
import "./Friends.sass"
import Friend from "./friend/Friend"

const Friends = (props) => {
	return (
		<div className="homepage-friends-container">
			<div className="title">{props.type}</div>
			<div className="homepage-friends">
				<Friend></Friend>
				<Friend></Friend>
				<Friend></Friend>
				<Friend></Friend>
				<Friend></Friend>
				<Friend></Friend>
				<Friend></Friend>
				<Friend></Friend>
				<Friend></Friend>
				<Friend></Friend>
				<Friend></Friend>
				<Friend></Friend>
				<Friend></Friend>
				<Friend></Friend>
				<Friend></Friend>
				<Friend></Friend>
				<Friend></Friend>
				<Friend></Friend>
				<Friend></Friend>
				<Friend></Friend>
			</div>
		</div>
	)
}

export default Friends
