"use strict"

const Deno = false
let Router, bind;

if (Deno)
{
    Router = (await import("npm:koa-router")).default;
    bind = (await import("npm:koa-clean")).default;
}
else
{
    Router = (await import("koa-router")).default;
    bind = (await import("koa-clean")).default;
}

import {get, set} from './vars.js';

const vars = new Router({ prefix: "/vars" })
  .post("/get", bind(get))
  .post("/set", bind(set));

const root = new Router({ prefix: "/api" })
  .use(vars.routes());

export { root };
