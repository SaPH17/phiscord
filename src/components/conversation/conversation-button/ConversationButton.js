import './ConversationButton.sass'
import dummy from '../../../assets/dummy.jpg'

const ConversationButton = () => {
    return (
        <a href="#" className="conversation-btn">
            <img src={dummy} alt=""/>
            <div>
                <div className="conversation-name">
                    Dummy Name
                </div>
                <div className="conversation-status">
                    Dummy Status
                </div>
            </div>
        </a>
    )
}

export default ConversationButton
