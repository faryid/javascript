const Looper = require("./looper")
const OddNotifier = require("./oddNotifier")

const looper = new Looper(1, 1000)
looper.addObserver(new OddNotifier())

looper.run()
