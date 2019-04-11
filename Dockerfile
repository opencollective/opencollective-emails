FROM node:11.8

# Install dependencies first
COPY package*.json ./
RUN npm install --unsafe-perm

COPY . .

ARG PORT=3000
ENV PORT $PORT

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

RUN npm run build

RUN npm prune --production

EXPOSE ${PORT}

CMD [ "npm", "run", "start" ]
