const Observer = require("./observer");

/**
 * OddNotifier is an observer that observes Looper instance,
 * It will notify for any odd number that occurs.
 */
class OddNotifier extends Observer {
    constructor() {
        super()
    }

    /**
     * eventIsRelevant returns true if the event
     * is relevant to "new-index" and odd number.
     * @param {object} event 
     * @returns {boolean}
     */
    eventIsRelevant(event) {
        return event.eventName == "new-index" &&
            event.value % 2 != 0
    }

    /**
     * reactToEvent logs value from given arguments.
     * @param {object} event 
     */
    reactToEvent(event) {
        console.log("----------------------")
        console.log("Odd number found!")
        console.log(event.value)
        console.log("----------------------\n")
    }
}

module.exports = OddNotifier
