const dotenv = require('dotenv')
const fs = require('fs')

let envPath
if (process.env.NODE_ENV === 'development') {
  envPath = './.env.development'
} else if (process.env.NODE_ENV === 'production') {
  envPath = './.env.production'
}

dotenv.config(envPath)

if (process.env.IS_LOCAL) {
  const envConfig = dotenv.parse(fs.readFileSync('./.env.local'))
  for (const k in envConfig) {
    process.env[k] = envConfig[k]
  }
}
module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/_default.scss";`,
      },
    },
  },
}
