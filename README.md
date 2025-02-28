# Responsive Pricing Page

A modern, responsive pricing page built with Next.js, TypeScript, and Tailwind CSS. Features a beautiful design with light and dark mode support.

## Features

- 🎨 Modern, clean design
- 🌓 Light/Dark mode toggle
- 📱 Fully responsive layout
- ♿ Accessible components
- 🎯 TypeScript support
- 🎭 Customizable pricing cards
- 🎉 Smooth transitions and animations

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Headless UI
- Hero Icons
- clsx & tailwind-merge for conditional styling

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   └── page.tsx           # Main page component
├── components/
│   ├── PricingCard.tsx    # Pricing card component
│   ├── ThemeProvider.tsx  # Theme context provider
│   └── ThemeToggle.tsx    # Theme toggle button
└── styles/
    └── theme.ts           # Theme configuration
```

## Customization

The pricing cards data can be customized in `src/app/page.tsx`. Each card supports:

- Title
- Description
- Monthly price
- Feature list with included/excluded items
- Highlighted state for emphasis

## License

MIT
