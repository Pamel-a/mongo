"use strict";

const __MODULE__ = "users"

const get = (db, query) =>
    db.collection(__MODULE__).findOne(query);

const updateWithUpsert = (db, $set) =>
    db.collection(__MODULE__).updateOne({ $set }, { upsert: true })
        .then(_ => _.result.n === 1)

module.exports = { get, updateWithUpsert }
