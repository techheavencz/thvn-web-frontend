import React from "react"
import {IEvent} from "../interfaces/event";

interface IEventProps extends IEvent {
	small?: boolean
}

export default function EventCard(event: IEventProps) {
	return (
		<div className={"card"}>
			<div className={"card-info"}>
				<span>{event.title}</span>
				<span>{event.date}</span>
				<span>{event.place}</span>
			</div>
			<img src={event.cover_url} alt={"cover image"} className={"card-img"}
				 width={event.small ? "225px" : "450px"}/>
		</div>
	)
}