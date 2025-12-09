<img src="https://socialify.git.ci/mmelokuhlemaphisa/React-Native-UI-Challenge/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="React-Native-UI-Challenge" width="640" height="320" />

---

# Destination Infomation & Tours App

A **React Native** mobile application showcasing destinations and tours with interactive UI components such as ratings, reviews, country flags, and upcoming tours. The app demonstrates modern React Native UI practices using components, hooks, and styling.

---

## Table of Contents

* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)
* [Components](#components)
* [Technologies](#technologies)
* [Structure](#project-structure)
* [License](#license)

---

## Features

* Display destination details including name, country, flag, rating, and reviews.
* Interactive **Read More / Read Less** toggle for long descriptions.
* Upcoming tours list with **image cards**, ratings, and review counts.
* Heart icon toggle for marking favorite tours.
* Arrow button for navigating to tour details.
* Round country flag display using `react-native-country-flag`.
* Responsive layout for mobile screens.

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/mmelokuhlemaphisa/React-Native-UI-Challenge.git
cd React-Native-UI-Challenge
```

2. **Install dependencies**

```bash
npm install

```

3. **Install Expo CLI (if not installed)**

```bash
npm install -g expo-cli
```

4. **Start the app**

```bash
npm start
```

* Open the app in **Expo Go** on your mobile device or in an emulator.

---

## Usage

1. Launch the app to see the **destination card** for Rio de Janeiro.
2. Scroll through the **Upcoming Tours** list.
3. Tap the **heart icon** to mark a tour as favorite.
4. Tap the **arrow icon** to navigate to tour details (can be extended to a detail screen).
5. Tap **Read More** to expand the description text.

---

## Components

### Information

* Displays destination name, country flag, rating, and description.
* Features **read more toggle** for expanding text.
* Contains `ToursList` component for showing upcoming tours.

### TourCard

* Displays **tour image, title, duration, price, rating, and reviews**.
* Heart icon toggle for favorites.
* Arrow button for navigation to tour details.

### ToursList

* Renders a **horizontal scrollable list** of `TourCard` components.
* Example tour data with image URLs, ratings, and review counts.

---

## Technologies

* **React Native** – Mobile application framework
* **Expo** – Toolchain for running React Native apps
* **React Hooks** – `useState` for UI interactivity
* **React Native Country Flag** – Display round country flags
* **Ionicons** – Icons for star, heart, and arrow

---

## Project Structure

```
/components
  ├─ HeaderImage.tsx
  ├─ TopButton.tsx
  ├─ Infomation.tsx
  ├─ TourCard.tsx
  └─ ToursList.tsx
/index.tsx
```

---


## License

This project is licensed under the MIT License.

---

