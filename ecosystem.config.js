module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps : [
        {
            name      : "frank.moe",
            script    : "bin/www",
            env: {
                PORT: "3001"
            },
            env_production : {
                NODE_ENV: "production"
            }
        },
    ]
}
