import React from "react"
import Navbar from "./navbar/Navbar"
import Chat from "../chats/Chat"
import ChatInput from "../chats/ChatInput"
import Member from "./member/Member"
import styles from "./Server.module.sass"

const Server = () => {
	return (
		<div className={styles.container}>
			<Navbar></Navbar>
			<div className={styles.content}>
				<div className={styles.chatContainer}>
					<div className={styles.chats}>
						<Chat></Chat>
						<Chat></Chat>
						<Chat></Chat>
						<Chat></Chat>
						<Chat></Chat>
						<Chat></Chat>
						<Chat></Chat>
						<Chat></Chat>
					</div>
					<ChatInput placeholder="Message #dummy-channel"></ChatInput>
				</div>
				<div className={styles.memberContainer}>
					<div className={styles.memberGroup}>ADMIN</div>
					<Member></Member>
					<Member></Member>
					<Member></Member>
					<Member></Member>
					<div className={styles.memberGroup}>MEMBER</div>
					<Member></Member>
					<Member></Member>
					<Member></Member>
					<Member></Member>
					<Member></Member>
					<Member></Member>
					<Member></Member>
					<Member></Member>
					<Member></Member>
					<Member></Member>
					<Member></Member>
					<Member></Member>
					<Member></Member>
					<Member></Member>
					<Member></Member>
					<Member></Member>
					<Member></Member>
					<Member></Member>
					<Member></Member>
					<Member></Member>
				</div>
			</div>
		</div>
	)
}

export default Server
