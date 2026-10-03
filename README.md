# AUREX Full-Stack Engineering Internship - Month 2 Week 1

**Intern Name:** Shanza Qammar  
**Domain:** Frontend Development  
**Month:** 2  
**Week:** 1  
**Project:** React Task Manager using Vite  

---

## Live Deployment Link
🔗 https://aurex-month2-week1-react-task-manager.vercel.app

---

## GitHub Repository
🔗 https://github.com/Shanzaqammar/aurex-month2-week1-react-task-manager

---

## Technologies Used
- React 19
- Vite 6
- TypeScript
- CSS3 (Flexbox, CSS Variables, Responsive Design)
- localStorage API

---

## Features Implemented
- ✅ Add new task (controlled form input)
- ✅ Display task items dynamically using list mapping
- ✅ Toggle task completion status
- ✅ Delete tasks from the list
- ✅ Edit task functionality
- ✅ Filter tasks (All / Active / Completed)
- ✅ Input validation (empty input, 100 char limit)
- ✅ Save tasks in localStorage
- ✅ Retrieve tasks after page refresh
- ✅ Responsive design (mobile, tablet, desktop)

---

## Component Hierarchy

App
├── Header
├── TaskForm (Handles input state & submission)
└── TaskList (Maps through array)
    └── TaskItem (Individual task item display & actions)

---

## Folder Structure

aurex-month2-week1-react-task-manager/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── components/
│       ├── Header.tsx
│       ├── TaskForm.tsx
│       ├── TaskList.tsx
│       └── TaskItem.tsx
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md

---

## Setup Instructions

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open http://localhost:5173 in your browser

---

## Learning Outcomes

- Learned React fundamentals (components, JSX, props, state)
- Used `useState` hook for state management
- Used `useEffect` hook for localStorage persistence
- Passed data and functions via props (parent-child communication)
- Implemented component hierarchy with clean separation of concerns
- Used TypeScript for type safety
- Deployed React app on Vercel

---

## Challenges Faced

**Challenge 1: Vercel Build Error**
Solution: Changed build command from `tsc -b && vite build` to `vite build` in package.json.

**Challenge 2: CSS Import Error**
Solution: Ensured `index.css` file was in the correct `src` folder location.

**Challenge 3: State Management**
Solution: Lifted state to App component and passed functions via props.

---

## Completed Features Checklist

- [x] Add task
- [x] Edit task
- [x] Delete task
- [x] Mark task as complete
- [x] Basic filtering (All/Active/Completed)
- [x] Form/input validation
- [x] Save tasks in localStorage
- [x] Retrieve tasks after page refresh
- [x] Remove/update stored tasks
- [x] Responsive interface
- [x] Only HTML5, CSS3, React, TypeScript used
- [x] Live deployment on Vercel

---

**Submitted By:**  
**Shanza Qammar**  
**Frontend Development Intern**  
**AUREX Full-Stack Engineering Internship**  
**Month 2 — Week 1**
