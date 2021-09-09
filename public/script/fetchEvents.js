import {Event} from "./Event.js";

const API_URL = `https://events.thvn-dev.cz`;

export async function fetchEvents() {
    const response = await fetch(`${API_URL}/events/TechHeavenCZ`);
    return (await response.json()).data.map(eventData => new Event(eventData));
}