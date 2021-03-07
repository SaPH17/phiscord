import './NavButton.sass'
import ReactDOM from "react-dom";

import React, { Component } from 'react'

class NavButton extends Component {

    

    addClass(){
        // console.log(document.querySelector('.status'))
        // console.log(t)
        // document.querySelector('.status').classList.add('hovered')
        // const node = ReactDOM.findDOMNode(this);
        // if (node instanceof HTMLElement) {
        //     node.querySelector('.status').classList.add('hovered')
        // }
        // ReactDOM.findDOMNode(this).querySelector('.status').classList.add('hovered')


    }

    removeClass(){
        document.querySelector('.status').classList.remove('hovered')
    }

    render() {


        return (
            <div className="nav-btn-container">
                <div className="status"></div>
                <a href="/" className={"btn nav-btn"} onMouseEnter={this.addClass} onMouseLeave={this.removeClass}>
                    {/* {props.content} */}
                </a>
            </div>
        )
    }
}

export default NavButton
// const NavButton = (props) => {
//     function addClass(){
//         // console.log(document.querySelector('.status'))
//         // console.log(t)
//         // document.querySelector('.status').classList.add('hovered')
//         const node = ReactDOM.findDOMNode(this);
//         if (node instanceof HTMLElement) {
//             node.querySelector('.status').classList.add('hovered')
//         }
//         // ReactDOM.findDOMNode(this).querySelector('.status').classList.add('hovered')

//     }

//     const removeClass = () => {
//         document.querySelector('.status').classList.remove('hovered')
//     }

//     return (
//         <div className="nav-btn-container">
//             <div className="status"></div>
//             <a href="/" className={"btn " + props.classStyle} onMouseEnter={addClass} onMouseLeave={removeClass}>
//                 {props.content}
//             </a>
//         </div>
//     )
// }

