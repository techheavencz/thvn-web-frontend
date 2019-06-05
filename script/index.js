import {fetchEvents} from "./fetchEvents.js";
import {EventBox} from "./EventBox.js";
import {EventPrev} from "./EventPrev.js";

export async function main(){
    const containerElement = document.getElementById("events");
    const events = await fetchEvents();
    const date = new Date();
    let eventsAct = new Array();
    let i=0;
    for(const eventDate of events){
        if (eventDate.date >= date){
            eventsAct[i] = eventDate;
            i++;
        }
    }
    eventsAct = events.reverse();
    const eventPrev = new EventPrev(eventsAct[0]);
    eventsAct.splice(0, 1);
    for(const event of eventsAct){
        const eventBox = new EventBox(event, containerElement);
    }
}