# Extrums Test Assignment

This application is developed to manage and track ideas, achievements and completed challenges. The data is stored locally in the browser and can be synced with the database. The application consists of frontend and backend parts.

- **Frontend**: designed using React Typescript with Material UI.
- **Backend**: developed using Node + Express with MongoDB as the database.

## Features

- **Fresh Ideas:** fetches data from https://bored.api.lewagon.com and displays cards based on the response. (the https://www.boredapi.com is not used due to application errors).
- **Ideas list:** a slider of ideas that you add from fresh ideas to yours list. When clicking on a card from this list, the card is removed from the slider and becomes resolved.
- **Achievements:** contain categories and counts of resolved ideas based on the category.
- **Completed challenges:** displays resolved ideas in a table format.

## Installation

#### Backend

1. Install dependencies:

```bash
npm install
```

2. Set up MongoDB.
3. Start the backend server:

```bash
  npm start
```

#### Frontend

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:

```bash
VITE_API_URL=bored-api-url
VITE_MY_API_URL=your-backend-url
```

3. Start the development server:

```bash
npm run dev
```

## Overview
Here are some screenshots of the application:
![General](https://drive.google.com/file/d/1nV0cFimtA7_VWUIM_4y6Bl1sVJwmGJN2/view?usp=drive_link)

![Table](https://drive.google.com/file/d/1T_m0jgPc5Vphkt1rUpzMJTqjbQny2gI7/view?usp=drive_link)

![General-Mobile](https://drive.google.com/file/d/1PLexEDfMxs6R7t0Xi3caQ_a3H_cQVqZ0/view?usp=drive_link)

![Save-Pull](https://drive.google.com/file/d/1isx3-qEvQ1MmswdznsRFrGQTNB5Wc9na/view?usp=drive_link)

![Mongo](https://drive.google.com/file/d/1YhfYvc8_CnuB_ze3SHck_-N8AKisLAeV/view?usp=drive_link)