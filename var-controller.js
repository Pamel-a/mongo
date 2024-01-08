"use strict"

// const Vars  = require ("vars")
import {_get, _set} from "./vars.js"

export const get = async ({ db }, { key, sub_key }) => 
{
    console.log("key: ", key)
    const variable = await _get (db, key)
    console.log("variable: ", variable)
    if (variable)
        return variable
    else
        return [ 404, "not found" ]    
}

export const set = async ({ db }, { key, value }) => 
{
    _set (db, key, value)
    return "ok"
}

//module.exports = { get, set }
