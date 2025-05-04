# ⚡ Namaste React - Episode 04 - Show me the Code

### Part 1: 🧠 Planning & Structuring the Application

Before jumping into code, planning was essential. We broke down the app into visual sections and designed the basic structure using wireframes and folders.

### 📦 Application Structure

```bash
App
├── Header
│   ├── Logo
│   └── Navigation Items
├── Body
│   ├── Card Container
│   │   └── Restaurant Cards
└── Footer
    ├── Contact Info
    └── Misc Links
```

### 🧱 Components Implemented

- Header: Contains the logo and basic navigation items.
- Body: Contains the dynamic restaurant card list.
- RestaurantCard: A reusable component to display restaurant details using props.
- Footer: Displays static contact or support info.

---

## Part 2: ⚙️ Dynamic UI with Config Data

- We created a JavaScript array of objects representing restaurant data.
- Passed the values to the RestaurantCard component using props.
- Used .map() to render a list of cards dynamically in the Body component.

### 💡 What You Learn Here:

- **Props in React:** A powerful way to make components reusable and dynamic.
- **Config-Driven UI:** UI changes based on data/config, not hardcoded values.
- **The Role of key in Lists:** Used a unique key while mapping over restaurant data to optimize rendering and avoid React warnings.

---

### 💻 Tech Stack

- React (Functional Components)
- JSX
- No state management or routing yet (that comes in later episodes)

---

### 🚀 Getting Started

- **Clone the repository:**

```bash
git clone https://github.com/your-username/food-ordering-app.git
cd food-ordering-app
```

- **Run using your preferred dev server:**

```bash
npm install
npm start
```

You can also use npx parcel index.html if using Parcel.

### 🧩 Sample RestaurantCard Component

```jsx
const RestaurantCard = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="food" />
      <h2>{props.name}</h2>
      <h4>{props.cuisine}</h4>
      <p>{props.rating} stars</p>
    </div>
  );
};
```

Each card is rendered using props like name, cuisine, image, and rating.

## 📌 What’s Next?

- Add interactivity with state and hooks
- Introduce search and filtering
- Fetch real data using API
- Add routing and multiple pages
