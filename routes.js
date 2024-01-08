"use strict"

// Import Koa Router and middleware
import Router from 'npm:@koa/router';
import bind from 'npm:koa-clean'; 

import {get, set} from './var-controller.js';

const vars = new Router({ prefix: "/vars" })
  .post("/get", bind(get))
  .post("/set", bind(set));

const routes = new Router({ prefix: "/api" })
  .use(vars.routes());

export { routes };
