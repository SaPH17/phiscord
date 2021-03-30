import React from "react"
import styles from "./ChatInput.module.sass"

const ChatInput = ({ placeholder }) => {
	const plusButton = (
		<svg width="24" height="24" viewBox="0 0 24 24">
			<path
				fill="currentColor"
				d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
			></path>
		</svg>
	)

	const smileyButton = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<path
				fill="currentColor"
				d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.5 8c.828 0 1.5.671 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.671-1.5-1.5.672-1.5 1.5-1.5zm-7 0c.828 0 1.5.671 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.671-1.5-1.5.672-1.5 1.5-1.5zm3.501 10c-2.801 0-4.874-1.846-6.001-3.566l.493-.493c1.512 1.195 3.174 1.931 5.508 1.931 2.333 0 3.994-.736 5.506-1.931l.493.493c-1.127 1.72-3.199 3.566-5.999 3.566z"
			/>
		</svg>
	)

	return (
		<div className={styles.chatInputWrapper}>
			<div className={styles.chatInputContainer}>
				<div className={styles.button}>{plusButton}</div>
				<input
					type="text"
					name=""
					id=""
					className={styles.chatInput}
					placeholder={placeholder}
				/>
				<div className={styles.button}>{smileyButton}</div>
			</div>
		</div>
	)
}

export default ChatInput
