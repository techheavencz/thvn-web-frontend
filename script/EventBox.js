export class EventBox {
    constructor(event, targetElement) {
        this.event = event;
        this.targetElement = targetElement;
        this._createContainer();
        this.render();
    }
    _createContainer(){
        this.container = document.createElement("div");
        this.targetElement.appendChild(this.container);
    }
    render(){
        this.container.innerHTML = `
        <h1>${this.event.title}</h1>
        
        <p>${this.event.description.replace('\n','<br/>')}</p>
        
        
        
        `
    }
}