/**
 * Subject is an abstraction class for any observed class.
 */
class Subject {
    constructor() {
        this.observers = [];
    }

    /**
     * addObserver adds new observer to the list.
     * @param {Observer} observer 
     */
    addObserver(observer) {
        this.observers.push(observer)
    }

    /**
     * notifyObservers notify an event to all observers in the list.
     * @param {object} event 
     */
    notifyObservers(event) {
        this.observers.forEach( o => o.update(event))
    }
}

module.exports = Subject
