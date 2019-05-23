import {Event} from "./Event.js";

export async function fetchEvents() {
    const response = await fetch("./api/events.json");
    return (await response.json()).map(eventData => new Event(eventData));
}