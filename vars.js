"use strict";

const __MODULE__ = "vars";

const _get = (db, key) =>
    db.collection(__MODULE__).findOne({ key });

const _set = (db, key, value) =>
    db.collection(__MODULE__).updateOne({ key }, { $set: { value } }, { upsert: true })
        .then(_ => _.result.n === 1);

export const get = async ({ db }, { key }) => 
{
    console.log("get: ", key)
    const variable = await _get (db, key)
    console.log("variable: ", variable)

    if (variable)
        return variable
    else
        return [ 404, "not found" ]    
}

export const set = async ({ db }, { key, value }) => 
{
    await _set (db, key, value)
    return "ok"
}

