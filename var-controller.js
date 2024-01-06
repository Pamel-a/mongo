"use strict"

// const Vars  = require ("vars")
import Vars from "./vars.js"

export const get = async ({ db }, { key, sub_key }) => 
{
    const variable = await Vars.get (db, key)
    console.log("variable: ", variable)

    if (variable)
        return variable
    else
        return [ 404, "not found" ]    
}

export const set = async ({ db }, { key, value }) => 
{
    Vars.set (db, key, value)
    return "ok"
}

//module.exports = { get, set }
