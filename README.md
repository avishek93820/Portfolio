
# Avishek Chatterjee - AI/ML Portfolio Website

A premium, futuristic, fully responsive personal portfolio website built to showcase my projects, skills, and journey as an aspiring AI/ML Engineer and Software Developer.

## Live Demo
[Add Deployment Link Here]

---

## Overview

This portfolio website is designed with a modern AI-inspired aesthetic to create a strong first impression for recruiters, hiring managers, and collaborators.

It highlights:

- Professional profile
- Technical skills
- Featured projects
- Education timeline
- Certifications
- GitHub developer stats
- Contact form integration

---

## Features

### Modern UI/UX
- Futuristic premium design
- Glassmorphism effects
- Smooth animations
- AI-inspired particle background
- Gradient glow visuals
- Dark/light theme toggle
- Custom cursor
- Responsive design

### Interactive Components
- Animated hero section
- Typing text effect
- Scroll progress indicator
- Section reveal animations
- Project hover effects
- Modal project details
- Back to top button
- Smooth scrolling navigation

### Developer Integrations
- GitHub API integration
- GitHub stats dashboard
- Top languages display
- Repository showcase
- Contribution analytics

### Functional Features
- Contact form with EmailJS
- Resume download
- SEO optimization
- Theme persistence
- Responsive mobile navigation

---

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Lucide React

### Animations & UI
- tsParticles
- React Type Animation

### APIs & Integrations
- GitHub API
- EmailJS

### Deployment
- Vercel / Netlify

---

## Project Structure

```bash
portfolio/
│
├── public/
│   ├── favicon.ico
│   ├── resume.pdf
│   └── profile.jpg
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── GitHubStats.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── Loader.jsx
│   │
│   ├── hooks/
│   │   ├── useTheme.js
│   │   └── useScrollProgress.js
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   └── githubApi.js
│   │
│   ├── contexts/
│   │   └── ThemeContext.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env.example
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
