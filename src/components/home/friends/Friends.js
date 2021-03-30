import React from "react"
import styles from "./Friends.module.sass"
import Friend from "./friend/Friend"

const Friends = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>{props.type}</div>
			<div className={styles.friendsContainer}>
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
