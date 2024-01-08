"use strict";

const __MODULE__ = "users"

export const get = (db, query) =>
    db.collection(__MODULE__).findOne(query);

export const updateWithUpsert = (db, $set) =>
    db.collection(__MODULE__).updateOne({ $set }, { upsert: true })
        .then(_ => _.result.n === 1)
