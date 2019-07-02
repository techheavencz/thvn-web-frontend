import {Event} from "./Event.js";

const API_URL = `https://techheaven-general.appspot.com`;

export async function fetchEvents() {
    const response = await fetch(`${API_URL}/events/TechHeavenCZ`);
    return (await response.json()).data.map(eventData => new Event(eventData));
}