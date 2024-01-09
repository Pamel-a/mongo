"use strict"

import Router from "npm:koa-router";
import bind   from "npm:koa-clean";

const _get = (db, key) =>
    db.collection("vars").findOne({ key });

const get = async ({ db }, { key }) => {	
    console.log("get: ", key)
    const variable = await _get (db, key)
    console.log("variable: ", variable)
    return variable ? variable : [404, "not found"];
}

const vars = new Router({ prefix: "/vars" })
  .post("/get", bind(get))

const root = new Router({ prefix: "/api" })
  .use(vars.routes());

export { root };
