import React from "react";
import './Notifications.css';
import { getLatestNotification } from "./utils";


export default function Notification() {
	return (
		<div className="Notifications">
			<button onClick={btnLog} aria-label="close" style={{ float: "right" }}><img alt="close_btn" /></button>
			<p>Here is the list of notifications</p>
			<ul>
				<li data-priority="default">New course available</li>
				<li data-priority="urgent">New resume available</li>
				<li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
			</ul>
		</div >
	)
}

function btnLog() {
	console.log("Close button has been clicked")
}
