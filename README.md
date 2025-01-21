## Media Search Web Application

This web application allows users to search for various types of media content such as music, books, and other media using the iTunes Search API. It features a search bar and displays the search results in a list format, offering an intuitive and responsive design.

<b>Features:</b>

Search Bar: Users can type in search queries for music, books, or other media.
Search Results: Displays search results in a list format, showing relevant information like name, artist, or book title, and a link to view more details.
Responsive Design: The app is fully responsive, providing a smooth experience on both desktop and mobile devices.
Styling: The app uses Tailwind CSS for styling

<b>Technologies Used:</b>
React: Functional components and hooks for state management.
TypeScript: Type-safe components and proper data typing.
Tailwind CSS: For responsive and utility-first styling.
Next.js: To handle routing and provide an optimized framework.
UI Library: NextUI

<b>Setup Instructions</b>

Prerequisites
Node.js and npm/yarn installed on your system.

Clone the Repository

git clone https://github.com/MaggieShpileva/iTunes.git
cd iTunes

Install Dependencies

npm install
or
yarn install

The app will be available at http://localhost:3000 in your browser.

<b>Core Functionality</b>
Search Bar: The search bar allows users to input a query. The search is triggered on input change or form submit.

Fetch Data from iTunes Search API: The app uses the iTunes Search API to fetch media content based on the user's query. The API supports searching for various media types (music, movies, podcasts, books, etc.). The response is parsed and displayed in a list.

API Documentation: https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html

Search Results Display: Results are displayed below the search bar. Each result is presented with relevant details.
