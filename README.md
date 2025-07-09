# NeighborFit

## Overview
NeighborFit is a web application that helps users find their perfect neighborhood match in Bangalore based on their age, profession, and personal preferences. The application uses a matching algorithm to analyze user inputs against neighborhood data and provides personalized recommendations with match scores.

## Technologies Used

### Frontend
- **React.js**: For building the user interface
- **Framer Motion**: For smooth animations and transitions
- **Axios**: For making API requests to the backend

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web framework for handling API requests
- **CSV Parser**: For reading neighborhood data

## Features
- User-friendly interface for inputting age, profession, and preferences
- Interactive preference selection with visual feedback
- Real-time neighborhood matching based on user inputs
- Visually appealing results with match score indicators
- Responsive design for various screen sizes

## Project Structure

```
├── neighborfit-backend/
│   ├── data/
│   │   └── bangalore_neighborhoods.csv
│   ├── server.js
│   ├── package.json
│   └── .gitignore
└── neighborfit-frontend/
    ├── public/
    │   ├── index.html
    │   └── images/
    ├── src/
    │   ├── components/
    │   │   ├── Header.jsx
    │   │   ├── Form.jsx
    │   │   ├── PreferenceCard.jsx
    │   │   ├── Results.jsx
    │   │   ├── ResultCard.jsx
    │   │   ├── Footer.jsx
    │   │   └── ...
    │   ├── App.jsx
    │   ├── App.css
    │   └── index.js
    ├── package.json
    └── .gitignore
```

## Setup Guide

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd neighborfit-backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```
   The server will run on http://localhost:5000

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd neighborfit-frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
   The application will open in your browser at http://localhost:3000

## Algorithm Design
The matching algorithm works by:
1. Collecting user inputs (age, profession, preferences)
2. Applying profession-specific weights to different neighborhood attributes
3. Calculating match scores for each neighborhood based on weighted preferences
4. Sorting and returning the best matches

## Data Source
The application uses a curated dataset of Bangalore neighborhoods with ratings for various attributes like safety, transport connectivity, commute time, green spaces, social life, peace and quiet, and affordability.

## Future Improvements
- Add map visualization for neighborhood locations
- Implement user accounts to save preferences
- Include more detailed neighborhood information
- Add filters for specific amenities
- Expand to more cities

## Problem-Solving Approach
The NeighborFit application addresses the challenge of finding suitable neighborhoods in a large city by:
1. Simplifying complex decision-making through a user-friendly interface
2. Personalizing recommendations based on individual preferences and life circumstances
3. Providing quantitative match scores to help users make informed decisions