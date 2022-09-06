# FROM node:lts as dependencies
# WORKDIR /website
# COPY package.json yarn.lock ./
# RUN yarn install --frozen-lockfile

# FROM node:lts as builder
# WORKDIR /website
# COPY . .
# COPY --from=dependencies /website/node_modules ./node_modules
# RUN yarn build

# FROM node:lts as runner
# WORKDIR /website
# ENV NODE_ENV production
# # If you are using a custom next.config.js file, uncomment this line.
# # COPY --from=builder /website/next.config.js ./
# COPY --from=builder /website/public ./public
# COPY --from=builder /website/.next ./.next
# COPY --from=builder /website/node_modules ./node_modules
# COPY --from=builder /website/package.json ./package.json

# EXPOSE 3000
# CMD ["yarn", "start"]
FROM node:16-alpine

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY next.config.js ./next.config.js
# COPY pages ./pages
# COPY public ./public
# COPY redux ./redux
# COPY services ./services
# COPY constants ./constants
# COPY components ./components
# COPY styles ./styles

CMD ["yarn", "dev"]
