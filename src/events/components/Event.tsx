import React from "react"
import {IEvent} from "../interfaces/event";

export default function Event(event: IEvent){
	return(
		<div>
			<span>{event.title}</span>
			<span>{event.description}</span>
			<span>{event.date}</span>
			<span>{event.place}</span>
			<img src={event.cover_url} alt={"cover image"}/>
		</div>
	)
}