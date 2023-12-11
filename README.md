# Next.js Version of Phone Store E-commerce Application

## Overview
This repository contains the Next.js version of the Phone Store E-commerce Web Application. Originally developed in React, this application has been transitioned to Next.js to leverage its server-side rendering capabilities and enhanced SEO features. The application offers a seamless and efficient shopping experience for mobile phones.

## Features
- **Enhanced Performance:** Utilizes Next.js for improved loading times and overall performance.
- **SEO Friendly:** Server-side rendering enhances SEO, making the site more visible and accessible.
- **Responsive Design:** Responsive web design ensuring compatibility with all devices.
- **E-commerce Functionality:** Includes all essential e-commerce features such as product listing, search functionality, detailed product descriptions, cart management, and checkout process.

## Technology Stack
- **Framework:** Next.js
- **Language:** JavaScript (ES6)
- **Styling:** CSS
- **State Management:** State management using React Context or Redux
- **Backend Integration:** Mock backend using `json-server` (for demonstration purposes)

## Local Development
To run the application locally, follow these steps:

1. Clone the repository:
   ```
   git clone [Repository URL]
   ```

2. Install the dependencies:
   ```
   cd [Project Directory]
   npm install
   ```

3. Run the mock server:
   ```
   json-server --watch db.json
   ```

4. Start the Next.js application:
   ```
   npm run dev
   ```

The application should now be running on `localhost:3001` (because the mock server should be running on `localhost:3000`).

