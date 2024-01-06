"use strict";

const __MODULE__ = "vars";

export const get = (db, key) =>
    db.collection(__MODULE__).findOne({ key });

export const set = (db, key, value) =>
    db.collection(__MODULE__).updateOne({ key }, { $set: { value } }, { upsert: true })
        .then(_ => _.result.n === 1);