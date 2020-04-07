# Covid19 - tracker
> Project made with react. Corona virus daily tracker. 

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
App that track corona virus daily update, deaths, recover rate, and total. 

## Screenshots
![](https://github.com/MarkoVitkovic/react-covid19dashboard/blob/master/img.png)

## Technologies
* [React](https://reactjs.org/docs/getting-started.html) - version 16.13.1
* [Node.js](https://nodejs.org/en/docs/) - version 13
* [CSS](https://devdocs.io/css/) - version 3
* [React-dom](https://github.com/facebook/react) - version 16.13.1
* Axios


## Setup
Open terminal(cmd) and navigate:</br>
`npx create-react-app my-app`</br>
`cd my-app`</br>
`npm start`</br>
Open source in Visual Studio Code.

## Available Scripts

In the project directory, you can run:

npm start</br>
npm test</br>
npm run build</br>
npm run eject</br>
npm run build

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Code Examples
Code:</br>
`async getData(){`</br>
        `const res = await Axios.get("https://covid19.mathdro.id/api");`</br>
        `const resCountry = await Axios.get("https://covid19.mathdro.id/api/countries");`</br>
        `const countries = [];`</br>
       ` const image = res.data.image;`</br>
       ` for(var i = 0; i<resCountry.data.countries.length;i++){`</br>
          `  countries.push(resCountry.data.countries[i].name)`</br>
        `}`
        `this.setState({`</br>
            `confirmed: res.data.confirmed.value,`</br>
            `recovered: res.data.recovered.value,`</br>
            `deaths: res.data.deaths.value,`  </br>
            `countries,`</br>
            `image: image,`</br>
            `lastUpdate: res.data.lastUpdate`       </br>   
        `})`</br>
    `}`</br>

## Features
List of features ready and TODOs for future development
* Rooms features
* Rooms details
* Responsive
* All sizes of rooms, from 1 to 10 people
* Info of every room

To-do list:
* none

## Status
Project is: _finished_

## Inspiration
Credits: [freeCodeCamp.org](https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ)

## Contact
Created by [Marko Vitkovic](https://github.com/MarkoVitkovic) - feel free to contact me!
