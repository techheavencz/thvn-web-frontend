import React from "react"
import {IEvent} from "../interfaces/event";

interface IEventProps extends IEvent {
	small?: boolean
}

export default function EventCard(event: IEventProps) {
	const eventDate = new Date(event.date)

	return (
		<div className={event.small ? "card-small" : "card"}>
			<a href={event.event_url} className={"card-info"}>
				<span className={"title"}>{event.title}</span>
				<span
					className={"date"}>{eventDate.getDay()}.{eventDate.getMonth()}.{eventDate.getFullYear()} {eventDate.getHours()}:{eventDate.getMinutes()}</span>
				<span className={"place"}>{event.place}</span>
			</a>
			<img src={event.cover_url} alt={"cover image"} className={"card-img"}
				 width={event.small ? `${450/1.75}px` : "450px"}/>
		</div>
	)
}