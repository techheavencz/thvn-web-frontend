import React from "react";
import {IEvent} from "../interfaces/event";
import EventList from "./EventList";

interface EventSectionProps{
	title: string
	events: IEvent[]
}

export default function EventSection(props: EventSectionProps){
	return(
		<section className={"event-card-box"}>
			<h3 className={"box-title"}>{props.title}</h3>
			<div className={"box-content"}>
				{/*@ts-ignore*/}
				<EventList events={props.events}/>
			</div>
		</section>
	)
}