# Weather App 🌤️

A modern weather application built using React, JSX, CSS, and the OpenWeather API.

## Features

* Search weather by city name
* Real-time temperature updates
* "Feels like" temperature
* Humidity information
* Wind speed display
* Responsive glassmorphism UI
* Dynamic weather fetching using API calls

## Tech Stack

* React
* JSX
* CSS
* OpenWeather API

## Screenshots

Add your screenshots here.

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/weather-app.git
```

Navigate into the project folder:

```bash
cd weather-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## API Setup

Get your API key from OpenWeather:

https://openweathermap.org/api

Create a `.env` file in the root directory:

```env
VITE_API_KEY=your_api_key_here
```

Then access it inside your React app:

```javascript
const API_key = import.meta.env.VITE_API_KEY;
```

## Folder Structure

```bash
src/
│
├── components/
│   ├── search-bar.jsx
│   ├── temp-card.jsx
│
├── App.jsx
├── main.jsx
```

## Future Improvements

* 5-day weather forecast
* Weather icons
* Dynamic backgrounds
* Geolocation support
* Dark/Light mode
* Better mobile responsiveness

## Author

Made by Gurman 🚀
