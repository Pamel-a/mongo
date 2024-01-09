"use strict"

/*
let Koa, Bodyparser, Logger, Cors, Mongo;
const denoDeploy = true;

if (denoDeploy) 
{
    Koa = (await import("npm:koa")).default;
    Bodyparser = (await import("npm:koa-bodyparser")).default;
    Logger = (await import("npm:koa-logger")).default;
    Cors = (await import("npm:@koa/cors")).default;
    Mongo = (await import("npm:koa-mongo")).default;
} 
else 
{
    Koa = (await import("koa")).default;
    Bodyparser = (await import("koa-bodyparser")).default;
    Logger = (await import("koa-logger")).default;
    Cors = (await import("@koa/cors")).default;
    Mongo = (await import("koa-mongo")).default;
}
*/

import Koa from "npm:koa";
import Bodyparser from "npm:koa-bodyparser";
import Logger from "npm:koa-logger";
import Cors from "npm:@koa/cors";
import Mongo from "npm:koa-mongo";
import {config} from "./config.js";
import {root} from "./routes.js";

import { config } from "./config.js";
import { root }   from "./routes.js";

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
app.use(root.routes())

app.listen(config.port, () => {
    console.log(`🚀 API running on ${config.env} port ${config.port}`)
})
