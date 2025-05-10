# ⚡ Namaste React - 🌟 Episode 6: Exploring the World of React 🌍

Welcome to Episode 6 of my React learning journey, inspired by the Namaste React series! In this chapter, we explored how modern React apps communicate with the outside world through APIs, improve UX using Shimmer UI, and deal with real-world issues like CORS and loading states. Let’s unpack what I learned! 🚀

## 📘 What I Learned

### 1. 🌐 How React Applications Fetch and Display Data

- React apps are interactive by nature, and much of that interactivity comes from dynamic data. In this episode, we explored two strategies for data fetching:
- **Approach 1:** App loads → Fetch API → Render UI (slow initial load)

- **Approach 2:** App loads → Render basic UI → Fetch API → Re-render with data ✅ (preferred UX)

👉 The second approach offers a smoother user experience because it renders the shell UI instantly while data loads in the background.

### 2. 📡 Fetching Data from APIs

- We worked with the Swiggy API to fetch restaurant data. The key steps involved:
- ` Making a fetch request`
- `Parsing and destructuring the response`
- `Mapping the required fields`
- `Rendering dynamic UI from the fetched data`

🔍 This is a core concept in building real-world React applications that depend on external APIs.

### 3. ✨ Shimmer UI – Visual Feedback While Loading

- Instead of leaving a blank screen while data loads, we implemented a Shimmer UI component:
- `It acts as a placeholder/skeleton while waiting for data`
- `Improves perceived performance`
- `Keeps users engaged and informed`

We displayed <Shimmer /> conditionally until the data was ready.

### 4. 🚫 Handling CORS (Cross-Origin Resource Sharing) Issues

- When calling the Swiggy API from localhost, we ran into CORS policy errors. Here’s what I learned:
- `CORS is a browser security feature that restricts cross-origin requests.`
- The browser blocks requests that aren’t explicitly allowed by the server.
- ✅ Temporary workaround: Use a CORS Chrome extension during local development.

### 5. 🔄 Conditional Rendering in React

- We used conditional rendering to toggle between:
- `<Shimmer />` while data is loading
- `Restaurant cards` once data is fetched

This technique ensures that users are always presented with appropriate UI based on the app state.

### 6. 📊 Managing State with useState

- We used the useState hook to manage:
- `listOfRestaurants`: Complete list from the API
- `filteredListOfRestaurants`: Data filtered by search or other logic
- `searchText`: Controlled input value for search functionality

React's state system automatically triggers re-renders when data changes, keeping UI and state in sync.

## 🛠️ Core Code Snippet – Fetching & Rendering

```js
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_API_URL);
      const json = await data.json();

      // Used to dynamically locate the right card with restaurant data
      const restaurantsData = json?.data?.cards.find(
        (cardItem) => cardItem?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setListOfRestaurants(restaurantsData || []);
      setFilteredRestaurant(restaurantsData || []);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
```

### ⚠️ CORS in a Nutshell

- `CORS errors` happen when a browser blocks a cross-origin request for security.
- It's not a React issue, but a browser policy.
- Solutions include:
  - Using CORS proxy tools
  - Backend middleware
  - Chrome extensions (for dev only)

### 🎯 Final Thoughts

- Episode 6 was a big step forward. I learned how real-world React apps work with APIs, enhance user experience using shimmer UIs, manage state with hooks, and gracefully handle common development issues like CORS. These are foundational concepts that power every dynamic web application.

Stay tuned for Episode 7 — where things will get even more exciting! 💥
