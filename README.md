# Prex Wallet

![Prex Wallet Logo](src/assets/react.svg)

## Overview

Prex Wallet is a modern, responsive cryptocurrency wallet built with **React**, **TypeScript**, and **Vite**. It offers seamless asset management, transaction history tracking, and token swapping functionalities. Leveraging the power of **Tailwind CSS** for styling and a custom UI kit (`@prex0/uikit`), Prex Wallet ensures a smooth and intuitive user experience.

## Features

- **Asset Management**: View and manage your cryptocurrency assets effortlessly.
- **Transaction History**: Keep track of your transfer and swap transactions with detailed history logs.
- **Token Swapping**: Easily swap between supported tokens like USDC and WETH.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Dark Mode**: Toggle between light and dark themes for a personalized experience.
- **Type-Safe**: Built with TypeScript to ensure type safety and reduce runtime errors.
- **Linting**: Comprehensive ESLint setup with TypeScript-aware rules for code quality.

## Live Demo

[View Live Demo](https://wallet.prex0.com)

## Getting Started

### Prerequisites

- **Node.js** (v20 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/prex0/prex-wallet.git
   cd prex-wallet
   ```

2. **Install Dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   VITE_POLICY_ID=your_policy_id
   VITE_API_KEY=your_api_key
   ```

   *(Replace `your_policy_id` and `your_api_key` with your actual credentials.)*

### Running the Application

Start the development server:

Using npm:

```bash
npm run dev
```

Or using yarn:

```bash
yarn dev
```

Open your browser and navigate to `http://localhost:3000` to view the application.

### Building for Production

To build the application for production:

Using npm:

```bash
npm run build
```

Or using yarn:

```bash
yarn build
```

The optimized production build will be available in the `dist` directory.

### Previewing the Production Build

To preview the production build locally:

Using npm:

```bash
npm run preview
```

Or using yarn:

```bash
yarn preview
```

## Scripts

- **`dev`**: Starts the development server with hot module replacement.
- **`build`**: Builds the application for production.
- **`lint`**: Runs ESLint to check for code quality issues.
- **`preview`**: Previews the production build locally.

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **TypeScript**: Superset of JavaScript for static type checking.
- **Vite**: Fast development build tool and bundler.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **ESLint**: Linting tool for identifying and fixing code issues.
- **@prex0/uikit**: Custom UI component library for consistent styling and functionality.

## Project Structure

```
prex-wallet/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── BottomNav.tsx
│   │   ├── Header.tsx
│   │   ├── SendForm.tsx
│   │   ├── Sidebar.tsx
│   │   ├── SlidingForm.tsx
│   │   └── SwapHistoryItem.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── NotFound.tsx
│   │   ├── SendPage.tsx
│   │   ├── SwapPage.tsx
│   │   └── WalletLayout.tsx
│   ├── utils/
│   │   ├── date.ts
│   │   ├── make-url.ts
│   │   └── index.ts
│   ├── App.tsx
│   ├── AppRoute.tsx
│   ├── constants.ts
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── package.json
├── postcss.config.cjs
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Configuration

### ESLint

The project uses ESLint with TypeScript support to maintain code quality.

```javascript:eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
```

### Tailwind CSS

Tailwind CSS is configured for utility-first styling.

```javascript:tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  safelist: ['dark'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
    keyframes: {
      'accordion-down': {
        from: {
          height: '0',
        },
        to: {
          height: 'var(--radix-accordion-content-height)',
        },
      },
      'accordion-up': {
        from: {
          height: 'var(--radix-accordion-content-height)',
        },
        to: {
          height: '0',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
```

### Vite

Vite is used as the build tool for its fast development experience.

```typescript:vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
```

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**

2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m "Add your message"
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request**
