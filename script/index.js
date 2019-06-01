import {fetchEvents} from "./fetchEvents.js";
import {EventBox} from "./EventBox.js";
import {EventPrev} from "./EventPrev.js";

export async function main(){
    const containerElement = document.getElementById("events");
    const events = await fetchEvents();
    const eventPrev = new EventPrev(events[0]);
    let x = 0;
    for(const event of events){
        if(x!=0){
            const eventBox = new EventBox(event, containerElement);
        } else {
            x=1;
        }
    }
}