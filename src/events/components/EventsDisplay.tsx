import React from "react";
import {useEvents} from "../hooks/useEvents";
import EventCard from "./EventCard";
import EventSection from "./EventSection";

export default function EventsDisplay() {
	const events = useEvents();

	if (!events.loaded) {
		return (
			<div>
				Snažíme se načíst události...
			</div>
		)
	} else {
		if(events.failed){
			return(
				<div>
					Při načítání se něco pokazilo :(
				</div>
			)
		}

		let ActiveElem = <div></div>
		let FuturesElem = <div></div>
		let PrevElem = <div></div>
		if (events.current !== undefined) {
			ActiveElem =
				<EventCard id={events.current.id} title={events.current.title} description={events.current.description}
						   cover_url={events.current.cover_url} date={events.current.date} place={events.current.place}/>
		}
		if(events.future !== undefined && events.future.length > 0){
			FuturesElem = <EventSection title={"Další Akce"} events={events.future} />
		}
		if(events.prev !== undefined && events.prev?.length > 0){
			PrevElem = <EventSection title={"Minulé Akce"} events={events.prev} />
		}

		return(
			<div>
				<div>
					{ActiveElem}
				</div>
				{FuturesElem}
				{PrevElem}
			</div>
		)
	}
}