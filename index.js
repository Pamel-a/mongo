"use strict"

/*
const Koa = require("koa")
const Bodyparser = require("koa-bodyparser")
const Logger = require("koa-logger")
const Cors = require("@koa/cors")
const Mongo = require("koa-mongo")
const config = require("./config")
const routes = require("./routes")
*/

import Koa from "koa";
import Bodyparser from "koa-bodyparser";
import Logger from "koa-logger";
import Cors from "@koa/cors";
import Mongo from "koa-mongo";
import config from "./config.js";
import routes from "./routes.js";

const app = new Koa()

app.proxy = true

app.use(
    Mongo({
        url: config.mongodb_uri,
        max: 100,
        min: 1
    })
)

app.use(Logger())
app.use(Cors({ origin: "*", credentials: false }))
app.use(Bodyparser({ jsonLimit: "15mb" }))

routes.forEach(route => app.use(route.routes()))

app.listen(config.port, () => {
    console.log(`🚀 API running on ${config.env} port ${config.port}`)
})