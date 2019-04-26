import express from "express"
import bodyParser from "body-parser"
import morgan from "morgan"
import { MysqlConnect } from "./mysql"
import { user_router } from "../../modules/router/users.router"
import { bills_router } from "../../modules/router/bills.router"

const mysqlConnect = new MysqlConnect()
function headerSet(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  )
  res.setHeader("Access-Control-Allow-Credentials", true)
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,Authorization"
  )
  next()
}
const mysqlConnectMid = (req, res, next) => {
  req.mysql_db = mysqlConnect.getMysqlDb()
  next()
}
const serverMidleWare = (app, db) => {
  app.use(express.static("public"))
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(headerSet)
  app.use(mysqlConnectMid)
}
function notFoundPage(req, res, next) {
  let err = {
    message: "Not Found",
    status: 404
  }

  next(err)
}
function handlerErroo(error, req, res, next) {
  res.status(error.status || 500).json({
    status: error.status,
    message: error.message
  })
}
const routingServer = app => {
  const Router = express.Router()
  app.use("/api/users", user_router(Router))

  app.use("/api/bill", bills_router(Router))

  app.use(notFoundPage)
  app.use(handlerErroo)
}
export const init = () => {
  const app = express()
  app.use(morgan("dev"))

  serverMidleWare(app)
  routingServer(app)
  return app
}
