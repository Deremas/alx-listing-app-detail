# 🏡 Milestone 2: Responsive Listing Page

![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react)
![Next.js](https://img.shields.io/badge/Next.js-13+-000000?style=for-the-badge&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-4+-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3+-38B2AC?style=for-the-badge&logo=tailwind-css)

A **responsive property listing page** built with **Next.js, React, TypeScript, and Tailwind CSS**, featuring luxury properties, interactive filters, a hero section, and a clean layout that adapts across screen sizes.

---

## 📌 Overview

This project helps you master:

- Responsive web design using **Tailwind CSS**
- Reusable **React components** for layout (Header, Footer, Layout)
- **TypeScript interfaces** for type safety
- Proper **Next.js project structure**
- Dynamic rendering of **property listings** from sample data
- Interactive **filter functionality**
- Component composition and UI breakdown from mockups

---

## 🎯 Features

✅ **Header & Footer** – Navigation, logo, and relevant links  
✅ **Hero Section** – Background image with call-to-action text  
✅ **Filter Section** – Clickable filter pills for property types  
✅ **Property Listing Grid** – Responsive cards displaying properties  
✅ **Reusable Components** – Pill, Card, Header, Footer, Layout  
✅ **Responsive Design** – Mobile-first, tablet, and desktop layouts  
✅ **TypeScript Typing** – Interfaces for property data  
✅ **Optimized Performance** – Lazy loading and optimized images  
✅ **Accessibility** – Semantic HTML, alt text, keyboard navigable elements  

---

## 🛠️ Tech Stack

- **Next.js 13+** – React framework with SSG/SSR  
- **React 18** – Component-based UI  
- **TypeScript** – Static typing for safer code  
- **Tailwind CSS 3+** – Utility-first styling  
- **ESLint + Prettier** – Code quality and formatting  

---

## 📂 Project Structure

```bash
alx-listing-app-00/
├── components/
│   ├── layout/        # Header, Footer, Layout components
│   └── common/        # Reusable UI components (Pill, Card)
├── constants/         # Property listing sample data
├── interfaces/        # TypeScript interfaces
├── pages/
│   ├── index.tsx      # Home page with hero, filters, listing
│   └── _app.tsx       # Application root with Layout wrapper
├── public/            # Images and static assets
├── styles/            # Tailwind CSS global styles
└── next.config.js     # Next.js configuration
```

## 🧑‍💻 Installation & Setup
1️⃣ Clone the repository
```bash
git clone https://github.com/Deremas/alx-listing-app-00.git
```
2️⃣ Navigate to the project folder
```bash
cd alx-listing-app-00
```
3️⃣ Install dependencies:
```bash
npm install
```
4️⃣ Run the development server:
```bash
npm run dev
```

Open http://localhost:3000 to view the app.

---