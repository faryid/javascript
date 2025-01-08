/**
 * Observer is an abstraction class for an observer.
 */
class Observer {
    /**
     * Method used to compare whether given event is match with the conditions.
     */
    eventIsRelevant() {
        throw new Error("This needs to be implemented")
    }

    /**
     * Method used to react if given event is match with the conditions.
     */
    reactToEvent() {
        throw new Error("This needs to be implemented")
    }

    /**
     * update calls eventIsRelevant when event is coming,
     * then calls reactToEvent if event is relevant.
     * @param {object} event 
     */
    update(event) {
        if (this.eventIsRelevant(event)) {
            this.reactToEvent(event)
        }
    }
}

module.exports = Observer
