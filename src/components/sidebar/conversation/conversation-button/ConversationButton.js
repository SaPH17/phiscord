import styles from "./ConversationButton.module.sass"
import dummy from "../../../../assets/dummy.jpg"

const ConversationButton = () => {
	return (
		<a href="/home/conversation" className={styles.btn}>
			<img src={dummy} alt="" />
			<div>
				<div className={styles.name}>Dummy Name</div>
				<div className={styles.status}>Dummy Status</div>
			</div>
		</a>
	)
}

export default ConversationButton
