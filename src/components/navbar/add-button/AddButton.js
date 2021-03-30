import { useState } from "react"
import styles from "./AddButton.module.sass"

const AddButton = ({ visible, showModal }) => {
	const plusSign = (
		<svg width="24" height="24" viewBox="0 0 24 24">
			<path
				fill="currentColor"
				d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
			></path>
		</svg>
	)
	const [height, setHeight] = useState(0)

	return (
		<div className={styles.container}>
			<div
				className={styles.status}
				style={visible ? { height: 40 } : { height: height }}
			></div>
			<div
				className={styles.addBtn}
				onMouseEnter={() => setHeight(20)}
				onMouseLeave={() => setHeight(0)}
				onClick={() => {
					setHeight(40)
					showModal()
				}}
			>
				{plusSign}
			</div>
		</div>
	)
}

export default AddButton
