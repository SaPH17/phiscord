import './NavButton.sass'


const NavButton = (props) => {
    return (
        <div className="nav-btn-container">
            <div className="status"></div>
            <a href="/" className={"nav-btn " + props.classStyle}>
                {props.content}
            </a>
        </div>
    )
}

export default NavButton

