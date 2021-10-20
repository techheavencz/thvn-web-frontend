import React from "react";
import {IEvent} from "../interfaces/event";
import EventList from "./EventList";

interface EventSectionProps{
	title: string
	events: IEvent[]
}

export default function EventSection(props: EventSectionProps){
	return(
		<div>
			<h3>{props.title}</h3>
			<div>
				{/*@ts-ignore*/}
				<EventList events={props.events}/>
			</div>
		</div>
	)
}