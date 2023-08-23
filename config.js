const env = process.env.NODE_ENV || "dev"

const configs = {
    dev: {

        //mongodb_uri: "mongodb://127.0.0.1:27017/Cluster0",
        mongodb_uri: "mongodb+srv://...mongodb.net/Cluster0?retryWrites=true&w=majority",
        port: 3001,
    },
	production: {
        mongodb_uri: process.env.MONGODB_URI,
        port: process.env.PORT,
    }
}

Object.entries(configs).forEach(([env, arr]) => (arr.env = env))

const config = configs[env]
if (!config) throw new Error(`NODE_ENV \`${env}\` NOT CONFIGURED!`)

const badProperty = Object.entries(config).find(([key, value]) => value === undefined)
if (badProperty) throw new Error(`NODE_ENV \`${env}\` KEY \`${badProperty[0]}\` is undefined! Please configure it!`)

module.exports = config
