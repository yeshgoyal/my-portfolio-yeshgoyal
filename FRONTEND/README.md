# Yesh Goyal - Portfolio Website

A modern, highly attractive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern UI/UX**: Clean, premium design with glassmorphism and gradient effects
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive Design**: Fully optimized for mobile and desktop
- **Smooth Animations**: Framer Motion animations and scroll-based transitions
- **Interactive Elements**: Hover effects, animated typing, and micro-interactions
- **SEO Optimized**: Meta tags and semantic HTML
- **Fast Loading**: Optimized performance and lazy loading

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Icons**: Lucide React
- **Build Tool**: Next.js

## Sections

1. **Hero**: Profile image, animated typing effect, CTA buttons
2. **About**: Personal introduction and highlights
3. **Skills**: Animated progress bars and technology showcase
4. **Experience**: Work history and achievements
5. **Projects**: Project cards with live demos and GitHub links
6. **Achievements**: Competition wins and recognitions
7. **Certifications**: Professional certifications
8. **Contact**: Contact form and social links
9. **Footer**: Social links and navigation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yeshgoyal/portfolio.git
cd portfolio/FRONTEND
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/                  # Next.js app directory
    globals.css        # Global styles
    layout.tsx         # Root layout
    page.tsx          # Home page
  components/          # React components
    Hero.tsx
    About.tsx
    Skills.tsx
    Experience.tsx
    Projects.tsx
    Achievements.tsx
    Certifications.tsx
    Contact.tsx
    Footer.tsx
    Navbar.tsx
    ScrollProgress.tsx
  assets/             # Static assets
  lib/               # Utility functions
  hooks/             # Custom hooks
  types/             # TypeScript types
```

## Customization

### Profile Information

Update your personal information in the respective components:

- **Hero.tsx**: Update name, role, and social links
- **About.tsx**: Update personal introduction
- **Contact.tsx**: Update contact information
- **Footer.tsx**: Update footer information

### Theme Colors

Modify the theme colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* your colors */ },
      dark: { /* your colors */ }
    }
  }
}
```

### Animations

Customize animations in `globals.css` or component files using Framer Motion.

## Deployment

### Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Run `npm run build`
2. Upload the `out` folder to Netlify

### Other Platforms

The project can be deployed to any platform that supports Next.js applications.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: yeshgoyal656@gmail.com
- **Phone**: +91-7088706721
- **GitHub**: https://github.com/yeshgoyal
- **LinkedIn**: https://linkedin.com/in/yeshgoyal

---

Made with **React** and **Next.js** by Yesh Goyal
