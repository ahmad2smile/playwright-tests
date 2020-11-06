FROM mcr.microsoft.com/playwright:bionic

RUN mkdir /app

COPY package.json yarn.lock /app/

WORKDIR /app

RUN yarn

COPY . /app

