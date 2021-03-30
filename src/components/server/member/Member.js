import React from "react"
import style from "./Member.module.sass"
import dummy from "../../../assets/dummy.jpg"

const Member = () => {
	return (
		<div className={style.container}>
			<img src={dummy} alt="" />
			Dummy Name
		</div>
	)
}

export default Member
