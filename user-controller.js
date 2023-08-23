"use strict"

const Users = require ("users")
const CryptoJS = require("crypto-js");
const _key = "abcdabcdabcdabcd"
const _iv = "abcdabcdabcdabcd"



function encryptString(string)
{
    let key = CryptoJS.enc.Utf8.parse(_key)
    let iv = CryptoJS.enc.Utf8.parse(_iv)

    let encrypted = CryptoJS.AES.encrypt(string, key, {iv: iv})

    return encrypted.toString();
}



const slot = async ({ db, request }) => 
{   
    let user = await Users.get (db, { p: request.body } )

    var string = encryptString(JSON.stringify("test 123"))

    var obj = {a: string}
    await Users.updateWithUpsert (db, { p: request.body }, obj)

    return string
}

module.exports = { slot }
