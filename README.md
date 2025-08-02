# Personal Dashboard

A responsive personal dashboard web application built with plain HTML, CSS and JavaScript. Everything runs locally in the browser; no build step or backend is required.

## Features
- **To‑do list** – add, edit, delete and mark tasks complete. Tasks are saved in `localStorage`.
- **Notes** – simple rich‑text editor with bold, italic and bullet list formatting. Contents persist in `localStorage`.
- **Calendar** – displays the current month with today highlighted.
- **Weather widget** – fetches current conditions using the [Open‑Meteo](https://open-meteo.com/) API (no key required). Coordinates can be adjusted in the script.
- **Quote of the day** – pulled from the [Quotable](https://api.quotable.io/) API.
- **Dark mode toggle** – preference is stored in `localStorage`.
- **Responsive layout** – card‑based grid adapts from desktop to mobile.
- **Embedded playlist** – sample YouTube playlist included.

## Setup
1. Clone this repository.
2. Open `index.html` in a modern web browser. All functionality works offline except weather and quote API calls.

## Customisation
- Replace the YouTube playlist `src` with your own playlist or remove the section.
- Update `fetchWeather()` in `index.html` with different coordinates or another API.

## License
This project is provided for demonstration purposes. Feel free to modify and adapt it for personal use.
