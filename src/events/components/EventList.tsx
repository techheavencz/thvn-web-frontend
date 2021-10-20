import React from "react"
import {IEvent} from "../interfaces/event";
import Event from "./Event";

interface EventListProps {
	events: IEvent[]
}

export default function EventList(props: EventListProps) {
	return props.events.map(e => <Event key={e.id}
										id={e.id}
										title={e.title}
										description={e.description}
										cover_url={e.cover_url}
										date={e.date}
										place={e.place}/>
	)
}