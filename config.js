
/*
const denoDeploy = true
const env = denoDeploy ? Deno.env.get("NODE_ENV") || "dev" : "dev";

let mongodb_uri, port;
if (denoDeploy) 
{
    mongodb_uri = Deno.env.get("MONGODB_URI");
    port = Deno.env.get("PORT");
} 
else 
{
    mongodb_uri = "...";
    port = 3001;
}

const configs = {
    dev: {
		mongodb_uri: mongodb_uri,
		port: port,
    },
    production: {
        mongodb_uri: mongodb_uri,
        port: port,
    }
}
*/

const env = denoDeploy ? Deno.env.get("NODE_ENV") || "dev" : "dev";

const configs = {
    dev: {
        mongodb_uri: Deno.env.get("MONGODB_URI"),
        port: Deno.env.get("PORT")
    },
    production: {
        mongodb_uri: Deno.env.get("MONGODB_URI"),
        port: Deno.env.get("PORT")
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
