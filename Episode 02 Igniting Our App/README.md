# ⚡ Namaste React - Episode 02: Igniting Our App

In this episode, I explored the basics of **NPM**, **Parcel Bundler**, and how to properly set up a React project from scratch using tools like Parcel instead of relying on boilerplate setups like Create React App.

---

## 📦 Part 1: Understanding NPM & Package Management

### 💡 What is NPM?

NPM stands for **Node Package Manager**, but it does much more than just manage Node packages. It helps us:

- Install libraries or tools (called packages).
- Manage dependencies for a project.
- Automate scripts (like build, test, start, etc.).

---

### 🛠️ Initializing a Project with NPM

To start using npm in your project:

```bash
npm init
```
You'll be asked a few setup questions. 
- Test command: Use jest (covered in future episodes).

You can leave rest defaults as-is.
Once done, you’ll see a new file: package.json – this keeps track of all the packages and configurations for your project.

---
### 📄 What’s Inside package.json?
- name, version, description: Basic project info.
- scripts: Shortcuts to run commands like build or start.
- dependencies / devDependencies: Lists all installed packages.

### 📌 Installing Parcel as a Bundler
To build and bundle our app (including React), we’ll use Parcel.

 Install Parcel (as a development dependency):
```bash
npm install -D parcel
```
This helps us during development but isn’t required in production.

- -D or --save-dev flag means it’s a dev dependency.
### 📁 package-lock.json vs package.json
- package.json: Lists packages and version ranges (e.g., ^1.0.0).
- package-lock.json: Locks exact versions so builds are consistent across all machines.
### 🌳 Dependency Tree & node_modules
- When we install one package, it might install others it depends on. This is called the dependency tree.
- All packages are saved in the node_modules folder.
- Always add node_modules to .gitignore – we don’t want to push that huge folder to GitHub!
---
## 🔥 Part 2: Setting Up React with Parcel

### ▶️ Running the App with Parcel
Once Parcel is installed, you can run your app using:
```bash
npx parcel index.html
```
- npm is for installing packages.
- npx is used to run them without installing globally.
### 📥 Installing React & ReactDOM Locally
Instead of using CDN links, it’s best practice to install React via npm:
``bash
npm install react
npm install react-dom
```
This keeps all dependencies local to your project.
### 📦 Importing React into Your App
Once installed, import React and ReactDOM in your JS file like this:
```js
import React from "react";
import ReactDOM from "react-dom";
```
⚠️ If you get an error like "Cannot use import/export", make sure your script is treated as a module:
```html
<script type="module" src="App.js"></script>
```
### 🧰 Why Use Parcel?
Parcel offers a lot of handy features out of the box:

- ⚡ Dev Build: Automatically sets up a local server.
- 🔁 Hot Module Replacement (HMR): Auto-reloads changes.
- 🧠 Fast Rebuilds: Uses caching for quicker reloads.
- 🖼️ Image Optimization: Automatically compresses images.
- 📦 Production Ready: Minifies and optimizes files.
- ✂️ Code Splitting: Splits code into smaller chunks.
- 🌍 Differential Bundling: Builds optimized versions for different browsers.

### 📝 Summary
- NPM helps manage dependencies and project metadata.
- Parcel makes setting up and running a React project super simple.
- Instead of using external CDNs, it's better to install React and ReactDOM locally via npm.
- Parcel gives us modern tooling like HMR, caching, image optimization, and production builds — with zero config!

### 🚀 To Run the App
Install dependencies:
```bash
npm install
```
Start the dev server:
```bash
npx parcel index.html
```
Your app should be live and auto-refresh with changes! 🙌





