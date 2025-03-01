# 🚀 Startup Showcase Platform

A platform for entrepreneurs to share their startup ideas and get discovered by investors, mentors and users. Inspired by Y Combinator, this app is built with the latest web technologies like React 19, Next.js 15, Sanity, TailwindCSS and TypeScript. It's a fullstack web app with a headless CMS, user authentication, and a user-friendly interface to explore startup ideas.


## ⚙️ Tech Stack

- **React 19** (Component-based frontend framework)
- **Next.js 15** (Server-side rendered (SSR) fullstack framework)
- **Sanity** (Headless Content Management System (CMS) for content management)
- **TailwindCSS** (Utility-first, highly customizable CSS framework)
- **ShadCN** (Custom UI components for rapid development)
- **TypeScript** (Statically typed language for maintainability and scalability)
- **NextAuth** (Authentication and authorization framework for secure user management)

## 🔋 Features

### 🎯 Core Functionalities

- **Live Content API**: Displays the latest startup ideas dynamically on the homepage using Sanity's Content API.
- **GitHub Authentication**: Users can log in easily using their GitHub account.
- **Pitch Submission**: Users can submit startup ideas, including title, description, category, and multimedia links (image or video).
- **View Pitches**: Browse through submitted ideas with filtering options by category.
- **Pitch Details Page**: Click on any pitch to view its details, with multimedia and description displayed.
- **Profile Page**: Users can view the list of pitches they've submitted.
- **Editor Picks**: Admins can highlight top startup ideas using the "Editor Picks" feature managed via Sanity Studio.
- **Views Counter**: Tracks the number of views for each pitch instead of an upvote system.
- **Search**: Efficient search functionality to load and view pitches quickly.
- **Minimalistic Design**: Fresh and simple UI with essential pages for ease of use and a clean aesthetic.

### 🛠 Additional Features

- Built-in support for the latest **React 19** and **Next.js 15** features.
- Modular code architecture for **scalability** and **reusability**.
- Optimized performance with **server-side rendering (SSR) and static generation (SSG)**.

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/startup-showcase.git
cd startup-showcase
```

### 2️⃣ Install Dependencies

```sh
yarn install  # or npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env.local` file in the root directory and add your required API keys and credentials.

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

### 4️⃣ Run the Development Server

```sh
yarn dev  # or npm run dev
```

Visit **http://localhost:3000** to view the app.

## 📦 Deployment

This app can be deployed on **Vercel** for seamless Next.js support.

```sh
yarn build  # or npm run build
yarn start  # Start production server
```

---

Made with ❤️ using Next.js 15, React 19, and Sanity.
