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
├── app/                     # Next.js app directory
│   ├── globals.css         # Global CSS styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/            # Reusable components
│   ├── pricing/          # Pricing-related components
│   │   ├── PricingCard/  # Pricing card component
│   │   ├── BillingToggle/# Billing toggle component
│   │   ├── Price/        # Price display component
│   │   └── FeatureList/  # Feature list component
│   └── ui/               # UI components
│       ├── ThemeToggle/  # Theme toggle component
│       ├── Button/       # Button component
│       ├── pricing/      # Pricing UI utilities
│       └── theme/        # Theme context and utilities
├── styles/               # Global styles
│   └── theme.ts         # Theme configuration
└── types/               # TypeScript type definitions
    └── jest.d.ts        # Jest type definitions

Additional project files:
├── .storybook/            # Storybook configuration
├── __mocks__/             # Jest mocks
├── public/                # Static assets
├── jest.config.js         # Jest configuration
├── jest.setup.js          # Jest setup
├── next.config.js         # Next.js configuration
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Customization

The pricing cards data can be customized in `src/app/page.tsx`. Each card supports:

- Title
- Description
- Monthly price (yearly prices calculated automatically with 20% discount)
- Feature list with included/excluded items
- Highlighted state for emphasis
