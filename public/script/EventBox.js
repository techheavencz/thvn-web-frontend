import {htmlEscape as escape} from './Helpers.js';

export class EventBox {
  constructor(event, targetElement) {
    this.event = event;
    this.targetElement = targetElement;
    this._createContainer(this.event.cover_url);
    this.render();
  }
  _createContainer(cover) {
    this.container = document.createElement('div');
    this.container.style.background =
      'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 1) 74.59%, #000000 100%), url(' +
      cover +
      ' ) no-repeat 50% 50%';
    this.container.classList.add('Prev-event-element');
    this.targetElement.appendChild(this.container);
  }
  render() {
    this.month = this.event.date.getMonth() + 1;
    this.container.innerHTML = `
            <div class="Prev-event-details">
                <a class="Prev-event-title" href="${escape(this.event.event_url)}" target="_blank" rel="noopener">${escape(this.event.title)}</a>
                <div class="Prev-event-info">
                    <time datetime=${escape(this.event.date.getDate())} class="Prev-event-info-date">${escape(this.event.date.getDate())}. ${
      this.month
    }.</time>
                    <span class="Prev-event-info-place">
                        <img class="map-img" src="img/map.svg" alt="map-img">
                        <span>${escape(this.event.place)}</span>
                    </span>
                    <a class="Prev-event-info-link" target="_blank" rel="noopener" href=${escape(this.event.event_url)}>
                        <img class="Prev-event-info-img" src="img/facebook-logo.svg">
                    </a>
                </div>
            </div>
        `;
  }
}
