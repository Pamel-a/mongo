"use strict"

/*
const denoDeploy = true
let Router, bind;

if (denoDeploy)
{
    Router = (await import("npm:koa-router")).default;
    bind = (await import("npm:koa-clean")).default;
}
else
{
    Router = (await import("koa-router")).default;
    bind = (await import("koa-clean")).default;
}
*/

import Router from "npm:koa-router";
import bind   from "npm:koa-clean";
import { get, set } from './vars.js';

const vars = new Router({ prefix: "/vars" })
  .post("/get", bind(get))
  .post("/set", bind(set));

const root = new Router({ prefix: "/api" })
  .use(vars.routes());

export { root };
