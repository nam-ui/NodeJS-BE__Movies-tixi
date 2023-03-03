# frontend: https://github.com/nam-ui/ReactJS-FE__Movies_tixis-applo-
# backend:  https://github.com/nam-ui/NodeJS-BE__Movies-tixi

# setup
git --version 2.38.1.windows.1 <br />
npm--version 8.19.2 <br />
node --version v16.18.0 <br />
yarn --version 1.22.19 <br />
run cmd: yarn <br />
<br />
-> setup { <br />
    step 1 ( install node_mondule ): yarn <br /> 
    step 2 ( run app ): yarn start || yarn run dev <br />
    if you want to build server cmd: yarn build <br />
} <br />
-> deloy vps cmd: pm2 start dist/src/bin/www.js -f --watch -i --max-old-space-size=2048 <br />
# environment  .env
MONGO_PASSWORD="your-key"
MONGO_USERNAME="your-key"
MONGO_OPTIONS="your-key"
MONGO_HOST=db-"your-key"


SERVER_HOSTNAME=localhost

# save lib 
{
  "name": "api-graphql-tixi-back-end",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "nodemon app.js",
    "dev": "nodemon app.js",
    "server": "nodemon app.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "apollo-server": "^2.22.2",
    "apollo-server-express": "^2.22.2",
    "body-parser": "^1.19.0",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "graphql": "^15.5.0",
    "mongoose": "^5.12.3"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}
