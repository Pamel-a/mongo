
const Deno = false
const env = Deno ? Deno.env.get("NODE_ENV") || "dev" : process.env.NODE_ENV || "dev";

let mongodb_uri, port;
if (Deno) 
{
    mongodb_uri = Deno.env.get("MONGODB_URI");
    port = Deno.env.get("PORT");
} 
else 
{
    mongodb_uri = process.env.MONGODB_URI;
    port = process.env.PORT;
}

const configs = {
    dev: {
		mongodb_uri: "...",
		port: 3001,
    },
    production: {
        mongodb_uri,
        port,
    }
}

Object.entries(configs).forEach(([env, arr]) => (arr.env = env))

const config = configs[env]
if (!config) 
    throw new Error(`NODE_ENV \`${env}\` NOT CONFIGURED!`)

const badProperty = Object.entries(config).find(([key, value]) => value === undefined)
if (badProperty) 
    throw new Error(`NODE_ENV \`${env}\` KEY \`${badProperty[0]}\` is undefined! Please configure it!`)

export { config }
