import React from "react"
import Navbar from "./navbar/Navbar"
import ChatInput from "../chats/ChatInput"
import Chat from "../chats/Chat"
import styles from "./Conversation.module.sass"

const Conversation = () => {
	return (
		<div className={styles.container}>
			<Navbar></Navbar>
			<div className={styles.content}>
				<div className={styles.chatContainer}>
					<Chat></Chat>
					<Chat></Chat>
					<Chat></Chat>
					<Chat></Chat>
					<Chat></Chat>
					<Chat></Chat>
					<Chat></Chat>
				</div>
				<ChatInput placeholder="Message @Dummy"></ChatInput>
			</div>
		</div>
	)
}

export default Conversation
