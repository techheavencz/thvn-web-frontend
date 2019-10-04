export class Event {
    constructor(partial) {
        Object.assign(this, partial);

        // Fix Safari bug with ISO 8601 format
        // <time>Z      - works
        // <time>±hh    - invalid -> translate to <time>±hh:00
        // <time>±hhmm  - invalid -> translate to <time>±hh:mm
        // <time>±hh:mm - works
        // https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators, https://stackoverflow.com/a/49138448/1641372
        let safariComplaintDate = this.date
            .replace(/([-+])(\d\d)$/, '$1$2:00')
            .replace(/([-+])(\d\d)(\d\d)$/, '$1$2:$3');

        this.date = new Date(safariComplaintDate);
    }
}
