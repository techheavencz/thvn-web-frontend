import {fetchEvents} from "./fetchEvents.js";
import {EventBox} from "./EventBox.js";
import {EventBoxOld} from "./EventBoxOld.js";
import {EventPrev} from "./EventPrev.js";

export async function main() {
    const containerElement = document.getElementById("eventsNext");
    const containerEl = document.getElementById("eventsPast");
    const events = await fetchEvents();
    const date = new Date();
    let eventsAct = [];
    let i = 0;
    for (const eventDate of events) {
        if (eventDate.date >= date) {
            eventsAct[i] = eventDate;
            i++;
        }
    }
    eventsAct = eventsAct.reverse();
    new EventPrev(eventsAct[0]);
    events.splice(0, eventsAct.length);
    eventsAct.splice(0, 1);
    for (const event of eventsAct) {
        new EventBox(event, containerElement);
    }
    for (const event of events) {
        new EventBoxOld(event, containerEl);
    }
}