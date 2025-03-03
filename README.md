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
- 💰 Monthly/Yearly billing toggle with discount
- ✅ Comprehensive test coverage

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Headless UI
- Hero Icons
- Framer Motion
- clsx & tailwind-merge for conditional styling
- Jest & React Testing Library
- Storybook

## Deployment

The project is live at [https://payara-virid.vercel.app/](https://payara-virid.vercel.app/)

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

## Testing

The project includes several types of tests:

### Unit Tests

Run unit tests with:

```bash
npm test
```

Run tests in watch mode:

```bash
npm test -- --watch
```

### E2E Tests

End-to-end tests use React Testing Library for component integration testing:

```bash
npm test PricingCard.e2e.test.tsx
```

### Storybook Tests

Component stories include built-in tests. Run Storybook with:

```bash
npm run storybook
```

## Project Structure

```
src/
├── app/
│   └── page.tsx              # Main page component
├── components/
│   ├── pricing/
│   │   ├── PricingCard/     # Pricing card component and tests
│   │   ├── BillingToggle/   # Billing period toggle
│   │   ├── FeatureList/     # Feature list component
│   │   └── Price/           # Price display component
│   └── ui/
│       ├── Button/          # Reusable button component
│       ├── theme/           # Theme context and provider
│       └── pricing/         # Pricing context and provider
└── styles/
    └── theme.css            # Theme styles
```

## Customization

The pricing cards data can be customized in `src/app/page.tsx`. Each card supports:

- Title
- Description
- Monthly price (yearly prices calculated automatically with 20% discount)
- Feature list with included/excluded items
- Highlighted state for emphasis
