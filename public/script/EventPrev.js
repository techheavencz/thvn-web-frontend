import {htmlEscape as escape} from './Helpers.js';

export class EventPrev {
    constructor(event) {
        this.event = event;
        this._setContainer();
        this.render();
    }
    _setContainer(){
        this.container = document.getElementById("Next-event")
    }
    render(){
        this.month = this.event.date.getMonth() + 1;
        this.container.innerHTML = `
            <a class="Next-event-title" href="${escape(this.event.event_url)}" target="_blank" rel="noopener">${escape(this.event.title)}</a>
            <div class="Next-event-description">${escape(this.event.description).split("\n").join("<br>")}</div>
            <div class="Next-event-details">
                <div class="Details-element">
                    <img class="calendar-img" src="img/calendar.svg" alt="calendar-img">
                    <span>${escape(this.event.date.getDate())}. ${escape(this.month)}.</span>
                </div>
                <div class="Details-element">
                    <img class="map-img" src="img/map.svg" alt="map-img">
                    <span>${escape(this.event.place)}</span>
                </div>
                <div class="EmptySpace--expand"></div>
                <a class="Web-akce-button" href=${escape(this.event.event_url)} target="_blank" rel="noopener"><img class="Prev-event-info-img" src="img/facebook-logo.svg"></a>
            </div>
        `
    }
}