import React from "react"
import {IEvent} from "../interfaces/event";
import EventCard from "./EventCard";

interface EventListProps {
	events: IEvent[]
}

export default function EventList(props: EventListProps) {
	return props.events.map(e => <EventCard key={e.id}
											id={e.id}
											title={e.title}
											description={e.description}
											cover_url={e.cover_url}
											date={e.date}
											place={e.place}/>
	)
}