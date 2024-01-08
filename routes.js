"use strict"

// Import Koa Router and middleware
import Router from 'npm:@koa/router';
import bind from 'npm:koa-clean'; 

import {_get, _set} from './var-controller.js';

const vars = new Router({ prefix: "/vars" })
  .post("/get", bind(_get))
  .post("/set", bind(_set));

const root = new Router({ prefix: "/api" })
  .use(vars.routes());

export { root };
