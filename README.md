# SOLWRSOLWR

Welcome to the repository for the Solwr Tile Game built with Vue 3, TypeScript, TailwindCSS, and Firebase.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Development](#development)
- [Firebase Integration](#firebase-integration)
- [Recommended IDE Setup](#recommended-ide-setup)

## About

This is a simple tile game implemented using Vue 3, TypeScript, TailwindCSS, and Firebase. The game involves moving tiles to make the Solwr logo surface. I created this project in order to learn new technologies. The project has seen many iterations with different technologies.

## Features

- Interactive tile movement
- Real-time highscore updates using Firebase WebSocket
- Game state management with Pinia
- Firebase for backend services
- TypeScript for type safety
- Fast build and hot-reload with Vite

## Technologies Used

- **Framework**: Vue 3
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Backend**: Firebase
- **Real-time Updates**: Firebase Realtime Database

## Setup

To get a local copy up and running, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/PMolnes/tilegame-vuets.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd tilegame-vuets
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```

## Development

### Prerequisites

This project uses Firebase for backend services, including real-time highscore updates. Ensure you have your Firebase configuration set up:

1. Firebase Project Setup
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
2. Env File:
   - Create a env file in the root of your project
   - Add your firebase configuraton
     VITE_FIREBASE_API_KEY=your_api_key

#### Example env file:

```
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### Run the project

To start the development server with hot-reload, run:

```sh
npm run dev
```

## Recommended IDE Setup

I recommend using [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) plugin for vue support.
