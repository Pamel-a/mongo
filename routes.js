"use strict"

// Import Koa Router and middleware
import Router from 'npm:@koa/router';
import bind from 'npm:koa-clean'; 

import VarController from './var-controller.js';

const vars = new Router({ prefix: "/vars" })
  .post("/get", bind(VarController._get))
  .post("/set", bind(VarController._set));

const root = new Router({ prefix: "/api" })
  .use(vars.routes());

export { root };
