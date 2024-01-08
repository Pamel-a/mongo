"use strict"

/*
const Router = require("koa-router")
const bind = require("koa-clean")

const UserController   = require ("user-controller")
const VarController   = require ("var-controller")

const users = new Router({ prefix: "/users" })
	.post ("/slot", bind (UserController.slot))

const vars = new Router({ prefix: "/vars" })
	.post  ("/get",  bind (VarController.get))
	.post ("/set",  bind (VarController.set))

const root = new Router({ prefix: "/api" })
	.use  (users.routes())
	.use  (vars.routes())

module.exports = root
*/


// Import Koa Router and middleware
import Router from 'npm:@koa/router';
import bind from 'npm:koa-clean'; 

import VarController from './var-controller.js';

const vars = new Router({ prefix: "/vars" })
  .post("/get", bind(VarController.get))
  .post("/set", bind(VarController.set));

const root = new Router({ prefix: "/api" })
  .use(vars.routes());

export { root };
