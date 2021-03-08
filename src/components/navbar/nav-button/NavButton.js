import { NavLink , matchPath, useRouteMatch, Link } from 'react-router-dom'
import './NavButton.sass'
import { useState } from 'react'

const NavButton = ({content, classStyle, to}) => {
    
    const [height, setHeight] = useState(0)

    return (
        <div className="nav-btn-container">
            <div className="status" style={{height: height}}></div>
            {/* <NavLink to={to} className={"nav-btn " + classStyle} 
                    onMouseEnter={() => {if(height != 40) setHeight(20)}} onMouseLeave={() => {if(height != 40) setHeight(0)}}>
                {content}
            </NavLink> */}
            <ButtonLink to={to} label={content} activeOnlyWhenExact={true} className={"nav-btn " + classStyle}
                    onMouseLeave={() => {setHeight(0)}} onMouseEnter={() => {setHeight(20)}}
                    onActive={() => {setHeight(40)}} onDeactivate={() => {if(height == 40) setHeight(0)}}/>
        </div>
    )
}


function ButtonLink({ label, to, activeOnlyWhenExact, className, onMouseEnter, onMouseLeave, onActive, onDeactivate }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    match ? onActive() : onDeactivate()

    return (
        <NavLink to={to} className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {label}
        </NavLink>
    );
}

export default NavButton

