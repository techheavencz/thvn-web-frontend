export class Event {
    constructor (partial){
        Object.assign(this,partial)
        this.date = new Date(this.date.replace(/(\..*|\+.*)/,""))
    }
}