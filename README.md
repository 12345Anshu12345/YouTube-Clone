YouTube Clone - React Project
Overview
Project Name: YouTube Clone                      
Description: A responsive YouTube clone built with React, TypeScript, and the YouTube Data API, featuring video listings, dark/light mode, and a sidebar navigation.
Key Features:
•	YouTube API Integration: Fetches and displays trending videos.
•	Dark/Light Mode: Toggle between themes.
•	Works on desktop, tablet, and mobile.
•	Modern UI: Mimics YouTube’s design with a clean layout.
Technologies Used:
•	React (with TypeScript)
•	React Router (for navigation)
•	Font Awesome (for icons)
•	YouTube Data API (for fetching videos)
•	CSS Modules (for styling)
Project Goal:
To create a functional YouTube-like application with modern UI/UX principles, API integration, and responsive design.
________________________________________
Installation & Setup Guide
Prerequisites
•	Node.js (v16+)
•	npm 
•	YouTube API Key used from Google Cloud
1. Clone the Repository
https://github.com/12345Anshu12345/YouTube-Clone.git
2. Install Dependencies
cd youtube-clone
npm install

3. Set Up Environment Variables
REACT_APP_YOUTUBE_API_KEY="AIzaSyDiWRJakW5Ec4wedPNdfJJye3cDIMKRmBY"
4. Run the App
npm run dev
App will run at: http:http://localhost:5174/
5. Deployment of code
npm run build
1. In Netlify
Login in Netlify
Deploy manually and uploaded the file named dist
________________________________________
Code Structure & Best Practices
Folder Structure
Copy
src/
├── assets/
├── components/
│   ├── Header/
│   │   ├── header.css
│   │   └── header.tsx
│   ├── Login/
│   │   ├── Login.css
│   │   └── Login.tsx
│   ├── Sidebar/
│   │   ├── sidebar.css
│   │   └── Sidebar.tsx
│   └── Video/
│       ├── video.css
│       └── video.tsx
├── context/
│   ├── Theme_context.tsx
│   └── Themecontext.css
├── App.css
├── App.tsx
├── index.css
├── Layout.tsx
├── main.tsx
└── vite-env.d.ts
Best Practices
TypeScript: Strong typing for better maintainability.
Component-Based Architecture: Reusable UI components.
Responsive Design: Media queries for all screen sizes.
State Management: Context API for theme switching.
Error Handling: Loading & error states for API calls.
________________________________________
🔌 API Documentation
YouTube Data API
•	Endpoint: https://www.googleapis.com/youtube/v3/search
•	Method: GET
•	Required Parameters:
o	key ("AIzaSyDiWRJakW5Ec4wedPNdfJJye3cDIMKRmBY")
o	q (search query)
o	part=snippet
o	type=video
Authentication
________________________________________
UI/UX Design Guidelines
Responsive Layout
Device	Layout Behavior
Desktop	Full sidebar, 4-column grid
Tablet	Collapsed sidebar, 2-column grid
Mobile	Hidden sidebar (toggleable), 1-column grid
Theme Guidelines
•	Light Mode: White background, dark text.
•	Dark Mode: Dark background, light text.
________________________________________
Debugging & Error Handling
Common Issues
1.	API Key Not Working:
o	Checked YouTube API quota.
2.	Styling Issues:
o	Used browser DevTools (F12) to inspect elements.
3.	TypeScript Errors:
o	Verifed prop types and interfaces.
________________________________________
Testing Strategy
Test Cases
Test Case	Expected Result
Theme Toggle	Switches between light/dark mode
API Fetch	Loads videos without errors
Testing Tools
•	Jest (unit testing)
________________________________________
Deployment
Netlify
Uploaded the dist file 
GitHub Actions (CI/CD)
https://github.com/12345Anshu12345/YouTube-Clone.git
