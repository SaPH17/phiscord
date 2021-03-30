import styles from "./Navbar.module.sass"
import NavButton from "./nav-button/NavButton.js"
import Server from "./server-button/ServerButton.js"
import AddButton from "./add-button/AddButton"

const Navbar = ({ visible, showModal }) => {
	return (
		<div className={styles.navbar}>
			<NavButton />
			<div className={styles.divider}></div>
			<div className={styles.serverContainer}>
				<Server></Server>
				<Server></Server>
				<Server></Server>
				<Server></Server>
				<AddButton showModal={showModal} visible={visible}></AddButton>
			</div>
		</div>
	)
}

export default Navbar
