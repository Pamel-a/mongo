"use strict"

import Koa from "npm:koa";
import Bodyparser from "npm:koa-bodyparser";
import Logger from "npm:koa-logger";
import Cors from "npm:@koa/cors";
import Mongo from "npm:koa-mongo";

import { root }   from "./routes.js";

const app = new Koa()

app.proxy = false

app.use(
    Mongo({
        url: Deno.env.get("MONGODB_URI"),
        max: 100,
        min: 1
    })
)

app.use(Logger())
app.use(Cors({ origin: "*", credentials: false }))
app.use(Bodyparser({ jsonLimit: "15mb" }))

//routes.forEach(route => app.use(route.routes()))
app.use(root.routes())

app.listen(3001, () => {
    console.log(`🚀 API running`)
})
