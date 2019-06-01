import {Event} from "./Event.js";
const API_URL = `http://localhost:3000`;

export async function fetchEvents() {
    const response = await fetch(`${API_URL}/events/1777732895836985`);
    return (await response.json()).data.map(eventData => new Event(eventData));
}