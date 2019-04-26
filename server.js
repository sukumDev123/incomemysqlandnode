const http = require("http")

const { init } = require("./config/lib/express.js")

// console.log({  })

const httpConnect = http.createServer(init())

httpConnect.listen(3000, () => console.log("Connect to 3000 port"))
