import {useState, useEffect} from "react";
import {IEvent} from "../interfaces/event";

interface IUseEventsReturn {
	current?: IEvent,
	prev?: IEvent[],
	future?: IEvent[],
	loaded: boolean
}

export function useEvents(Url = "https://events.thvn-dev.cz/events/TechHeavenCZ"): IUseEventsReturn {
	const [events, setEvents] = useState<IUseEventsReturn>({loaded: false})

	useEffect(() => {
		if (!events.loaded) {
			fetch(Url).then(e => e.json().then(eventy => {
				const eventsObj: IUseEventsReturn = {future: [], prev: [], loaded: true}
				for (const eventDate of eventy) {
					if (eventDate.date >= new Date()) {
						eventsObj.future?.push(eventDate)
					} else {
						eventsObj.prev?.push(eventDate)
					}
				}

				if (eventsObj.future?.length as number > 0) {
					const eventsAct = eventsObj.future ? eventsObj.future : [];
					eventsObj.current = eventsAct[0]
					eventsObj.future?.splice(eventsAct?.length as number, 1);
					eventsAct?.splice(0, 1);
				}

				setEvents(eventsObj);
			}))
		}
	}, [events])

	return events;
}