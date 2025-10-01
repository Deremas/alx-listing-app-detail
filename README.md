# 🏡 Milestone 3: Property Detail Page with Dynamic Routing

![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react)
![Next.js](https://img.shields.io/badge/Next.js-13+-000000?style=for-the-badge&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-4+-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3+-38B2AC?style=for-the-badge&logo=tailwind-css)

A **responsive property detail page** built with **Next.js, React, TypeScript, and Tailwind CSS**, featuring dynamic routing, an image gallery, amenities list, reviews, and a booking section. The page dynamically renders property data and provides an intuitive, responsive user experience.

---

## 📌 Overview

This milestone builds upon the property listing page by introducing:

- **Dynamic routing** in Next.js for property details
- **Reusable React components** for property display
- Responsive layout using **Tailwind CSS**
- Interactive elements like **date pickers and booking forms**
- **TypeScript interfaces** for property data
- Proper component composition for maintainability

---

## 🎯 Features

✅ **Dynamic Routing** – `/property/[id]` pages render unique property details  
✅ **Property Detail Component** – Displays name, rating, location, description  
✅ **Image Gallery/Grid** – Main image with supporting images  
✅ **Amenities Section** – Organized list with responsive design  
✅ **Booking Section** – Pricing, date selection, and total cost calculator  
✅ **Review Section** – User avatars, ratings, and feedback  
✅ **Responsive Design** – Mobile-first, tablet, and desktop layouts  
✅ **TypeScript Typing** – Strongly typed property, review, and booking data  
✅ **Performance** – Optimized images and lazy loading where needed

---

## 🛠️ Tech Stack

- **Next.js 13+** – Dynamic routing with file-based pages
- **React 18** – UI component composition
- **TypeScript** – Type safety and maintainability
- **Tailwind CSS 3+** – Mobile-first styling
- **ESLint + Prettier** – Code quality and formatting

---

## 📂 Project Structure

```bash
alx-listing-app-detail/
├── components/
│   ├── layout/                # Header, Footer, Layout components
│   ├── common/                # Reusable UI components
│   └── property/              # Property-specific components
│       ├── PropertyDetail.tsx # Main property container
│       ├── BookingSection.tsx # Booking/reservation UI
│       └── ReviewSection.tsx  # Reviews and feedback
├── constants/                 # Property sample data
├── interfaces/                # TypeScript interfaces (Property, Review)
├── pages/
│   ├── index.tsx              # Home page with listings
│   └── property/[id].tsx      # Dynamic property detail page
├── public/                    # Images and static assets
├── styles/                    # Tailwind CSS global styles
└── next.config.js             # Next.js configuration
```

## 🧑‍💻 Installation & Setup

1️⃣ Duplicate the repository

```bash
git clone https://github.com/Deremas/alx-listing-app-detail.git
```

2️⃣ Navigate to the project folder

```bash
cd alx-listing-app-detail
```

3️⃣ Install dependencies

```bash
npm install
```

4️⃣ Run the development server

```bash
npm run dev
```

5️⃣ Open your browser at: `http://localhost:3000`

## 🏗️ Implementation Details

### 🔹 `pages/property/[id].tsx`

- ⚡ Implements **dynamic routing** for property pages
- 📄 Fetches property data using `id` from **PROPERTYLISTINGSAMPLE**
- 🏡 Renders the **PropertyDetail** component

---

### 🔹 `PropertyDetail.tsx`

- 🏷️ Displays **property name, rating, and location**
- 🖼️ Renders an **image grid/gallery** of the property
- 📑 Includes **description tabs**: _What we offer_, _Reviews_, _About host_
- 🛠️ Lists **amenities and services** provided

---

### 🔹 `BookingSection.tsx`

- 💵 Shows **price per night**
- 📆 Provides **check-in/check-out date pickers**
- 🧮 Calculates and displays the **total cost**
- 🟢 Includes a **“Reserve now”** button

---

### 🔹 `ReviewSection.tsx`

- 👤 Displays **reviews with user avatars and ratings**
- 📝 Shows **review content** with proper formatting
- 🔄 Supports **pagination for multiple reviews** if needed
