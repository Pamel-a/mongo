"use strict"

import Router from "npm:koa-router";
import bind   from "npm:koa-clean";

const _get = (db, key) =>
    db.collection("vars").findOne({ key });

const get = async ({ db }, { key }) => {	
    console.log("get: ", key)
    const variable = await _get (db, key)
    console.log("variable: ", variable)

    if (variable)
        return variable
    else
        return [ 404, "not found" ]    
}

const vars = new Router({ prefix: "/vars" })
  .post("/get", bind(get))
  .post("/set", bind(set));

const root = new Router({ prefix: "/api" })
  .use(vars.routes());

export { root };
