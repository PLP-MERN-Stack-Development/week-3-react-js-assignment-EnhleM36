# 🚀 TaskCommander

TaskCommander is a modern, responsive task manager app built with **React**, **Vite**, and **Tailwind CSS**. It allows users to add, complete, delete, and organize tasks, toggle dark mode, and view sample API data with infinite scroll.

🌐 **Live Demo**: [taskcommander.vercel.app](https://taskcommander-kkhadqopr-ntwenhle-mtshalis-projects.vercel.app)

---

## ✨ Features

- ✅ Add, complete, and delete tasks
- ✅ Reusable UI components (Button, Card, Layout, etc.)
- ✅ Light/Dark theme switcher using Context API
- ✅ Infinite scroll with live data from JSONPlaceholder API
- ✅ Responsive design for mobile, tablet, and desktop
- ✅ Built with React + Tailwind CSS + React Router
- ✅ Organized project structure with clean, maintainable code

---

## 🧱 Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Routing**: React Router
- **State Management**: React Hooks (`useState`, `useEffect`, `useContext`)
- **API Integration**: [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- **Deployment**: Vercel

---

```## 📁 Project Structure

src/
├── components/       # Reusable UI components (Button, Card, Layout, etc.)
├── context/          # Theme context (e.g., ThemeContext.jsx)
├── pages/            # Route pages: Home, About, ApiPage
├── hooks/            # Custom React hooks (e.g., useLocalStorage, useDebounce)
├── lib/              # API utils, helpers, constants, etc.
├── types/            # Centralized types or constants (for future TypeScript support)
├── App.jsx           # Route setup with React Router
├── main.jsx          # React root with ThemeProvider
├── index.css         # Tailwind base and custom styles
tailwind.config.js    # Tailwind configuration
vite.config.js        # Vite setup
```
