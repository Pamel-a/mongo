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

import Koa from "npm:koa";
import Bodyparser from "npm:koa-bodyparser";
import Logger from "npm:koa-logger";
import Cors from "npm:@koa/cors";
import Mongo from "npm:koa-mongo";
import {config} from "./config.js";
import {root} from "./routes.js";

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

//routes.forEach(route => app.use(route.routes()))
app.use(root.routes()))

app.listen(config.port, () => {
    console.log(`🚀 API running on ${config.env} port ${config.port}`)
})
