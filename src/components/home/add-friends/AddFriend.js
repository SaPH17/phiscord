import React from "react"
import styles from "./AddFriend.module.sass"

const AddFriends = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>ADD FRIEND</div>
			<div className={styles.description}>
				You can add a friend with their PisHord Tag. It's cAsE sEnSitIvE!
			</div>
			<div className={styles.inputContainer}>
				<input type="text" name="" id="" placeholder="Enter a Username#0000" />
				<div className={styles.button}>Send Friend Request</div>
			</div>
		</div>
	)
}

export default AddFriends
