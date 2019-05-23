import {fetchEvents} from "./fetchEvents.js";
import {EventBox} from "./EventBox.js";

export async function main(){
    const containerElement = document.getElementById("events")
    for(const event of await fetchEvents()){
        const eventBox = new EventBox(event, containerElement);
    }
}