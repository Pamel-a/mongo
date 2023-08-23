"use strict"

const fetch = require("node-fetch")
const Vars  = require ("vars")

const get = async ({ db }, { key, sub_key }) => 
{
    const variable = await Vars.get (db, key)
    console.log("variable: ", variable)

    if (variable)
        return variable
    else
        return [ 404, "not found" ]    
}



const set = async ({ db }, { key, value }) => 
{
    Vars.set (db, key, value)
    return "ok"
}


module.exports = { get, set }
