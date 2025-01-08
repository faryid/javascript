const Subject = require("./subject")

/**
 * Looper is an object that loops from given start number to end number.
 */
class Looper extends Subject {
    constructor(first, last) {
        super()
        this.start = first
        this.state = first
        this.end = last
    }

    /**
     * run used to run the loop within Looper instance.
     */
    run() {
        for (this.state = this.start; this.state < this.end; this.state++) {
            this.notifyObservers({
                eventName: "new-index",
                value: this.state
            })
        }
    }
}

module.exports = Looper
