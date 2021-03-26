import "./Channel.sass"
import ChannelButton from "./channel-button/ChannelButton"

const Channel = () => {
	return (
		<div className="channel-container">
			<div className="server-name">
				<a href="#">Server Name</a>
				<svg width="18" height="18">
					<g fill="none" fillRule="evenodd">
						<path d="M0 0h18v18H0"></path>
						<path
							stroke="currentColor"
							d="M4.5 4.5l9 9"
							strokeLinecap="round"
						></path>
						<path
							stroke="currentColor"
							d="M13.5 4.5l-9 9"
							strokeLinecap="round"
						></path>
					</g>
				</svg>
			</div>
			<div className="channel-container">
				<ChannelButton type="text" />
				<ChannelButton type="text" />
				<ChannelButton type="voice" />
				<ChannelButton type="voice" />
				<ChannelButton type="text" />
				<ChannelButton type="text" />
				<ChannelButton type="voice" />
				<ChannelButton type="voice" />
				<ChannelButton type="text" />
				<ChannelButton type="text" />
				<ChannelButton type="voice" />
				<ChannelButton type="voice" />
				<ChannelButton type="text" />
				<ChannelButton type="text" />
				<ChannelButton type="voice" />
				<ChannelButton type="voice" />
				<ChannelButton type="text" />
				<ChannelButton type="text" />
				<ChannelButton type="voice" />
				<ChannelButton type="voice" />
				<ChannelButton type="text" />
				<ChannelButton type="text" />
				<ChannelButton type="voice" />
				<ChannelButton type="voice" />
				<ChannelButton type="text" />
				<ChannelButton type="text" />
				<ChannelButton type="voice" />
				<ChannelButton type="voice" />
			</div>
		</div>
	)
}

export default Channel
