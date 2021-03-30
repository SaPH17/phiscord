import React from "react"
import styles from "./Chat.module.sass"
import dummy from "../../assets/dummy.jpg"

const Chat = () => {
	const replyLogo = (
		<svg width="24" height="24" viewBox="0 0 24 24">
			<path
				d="M10 8.26667V4L3 11.4667L10 18.9333V14.56C15 14.56 18.5 16.2667 21 20C20 14.6667 17 9.33333 10 8.26667Z"
				fill="currentColor"
			></path>
		</svg>
	)

	const editLogo = (
		<svg width="20" height="20" viewBox="0 0 24 24">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z"
				fill="currentColor"
			></path>
		</svg>
	)

	const trashLogo = (
		<svg width="20" height="20" viewBox="0 0 24 24">
			<path
				fill="currentColor"
				d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"
			></path>
			<path
				fill="currentColor"
				d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z"
			></path>
		</svg>
	)

	return (
		<div className={styles.container}>
			<img src={dummy} alt="" />
			<div className={styles.content}>
				<div className={styles.header}>
					<div className={styles.name}>Dummy Name</div>
					<div className={styles.time}>Today at 8:59 PM</div>
				</div>
				<div className={styles.message}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, et,
					sit eum numquam molestiae non culpa officiis consectetur assumenda
					vero soluta eveniet dignissimos, minima architecto ratione impedit
					blanditiis ea perspiciatis facilis quae enim. Id nemo architecto
					laudantium debitis neque repudiandae, libero quaerat fuga harum
					possimus aspernatur aut? Facere est incidunt assumenda, hic, adipisci
					quisquam quo rem laboriosam, dolores voluptatum architecto saepe fuga
					expedita. Ratione saepe molestias quis totam odio unde accusantium
					mollitia quisquam deleniti, optio libero quia neque amet praesentium
					sit perspiciatis dolorum, officia iste dolores autem voluptate ea.
					Dolore accusamus aliquam quam commodi ducimus similique assumenda nam,
					earum aliquid.
				</div>
			</div>
			<div className={styles.buttons}>
				<div className={styles.button}>{replyLogo}</div>
				<div className={styles.button}>{editLogo}</div>
				<div className={styles.button}>{trashLogo}</div>
			</div>
		</div>
	)
}

export default Chat
