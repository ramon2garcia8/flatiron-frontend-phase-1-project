# flatiron-frontend-phase-1-project
My Flatiron Frontend Phase 1 Project

## Learning Goals

- Access information from a local API using

    1. a GET request and use it to update the DOM
    2. a POST request and use it to update the DOM
    3. a DELETE request and use it to update the DOM

- Listen for user events and update the DOM in response

## Introduction

Today I'll be building an app for displaying only the Best Martial Arts. I will be using a local API and building out the frontend for my app.

## Demo

Use this video as an example of how the app should work.

![demo](https://www.loom.com/share/7ee9525547154640bd4e3af961561f63)

## Setup

- Run `json-server --watch db.json` to get the backend started
- Open the `index.html` file on your browser by running eplorer.exe index.html
- Write your code in the `index.js`, `index.html`, & `style.css` files

## Endpoints

My base URL for my local API will be: `http://localhost:3000`

The endpoints I may need are:

- GET `/martial-arts`
- POST `/martial-arts`
- DELETE `/martial-arts/:id`

## Core Deliverables

As a user, I can:

- See all martial arts images in the `div` with the id of `martial-arts-collection`. When  the page loads, request the data from the server to get all the martial arts objects. Then, display the image for each of the martial arts using an `img` tag inside the `#martial-arts-collection` div.
- Create a new martial arts after submitting the `add-martial-arts-form` form. The new martial arts should be added to the `#martial-arts-collection` div. The new martial arts DOES persist; in other words, if you refresh the page, the new martial arts remains on the page.