# Frontend Component Library

A reusable React component library built with TypeScript and styled-components. Components are showcased using Storybook and can be published to npm.

## Features

- 🎨 Built with React and TypeScript
- 💅 Styled with styled-components
- 📚 Documented with Storybook
- ✅ Tested with Jest and React Testing Library
- 📦 Ready for npm publishing
- 🚀 Deployable to GitHub Pages

## Installation

```bash
npm install frontend-component-library
```

## Usage

```tsx
import { Button } from 'frontend-component-library';

function App() {
  return (
    <Button variant="primary" size="medium" onClick={() => alert('Clicked!')}>
      Click Me
    </Button>
  );
}
```

## Components

### Button

A customizable button component with multiple variants and sizes.

**Props:**
- `variant`: 'primary' | 'secondary' | 'danger' (default: 'primary')
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `loading`: boolean (default: false)
- `disabled`: boolean (default: false)
- All standard HTML button attributes

**Example:**
```tsx
<Button variant="primary" size="large">
  Primary Button
</Button>

<Button variant="secondary" size="small">
  Secondary Button
</Button>

<Button variant="danger" loading>
  Danger Button
</Button>
```

## Development

### Install Dependencies

```bash
npm install
```

### Run Tests

```bash
npm test
```

### Build Library

```bash
npm run build
```

### Run Storybook

```bash
npm run storybook
```

This will start Storybook on http://localhost:6006

### Build Storybook for Production

```bash
npm run build-storybook
```

### Deploy Storybook to GitHub Pages

```bash
npm run deploy-storybook
```

## Project Structure

```
├── src/
│   ├── components/
│   │   └── Button/
│   │       ├── Button.tsx          # Component implementation
│   │       ├── Button.test.tsx     # Jest tests
│   │       ├── Button.stories.tsx  # Storybook stories
│   │       └── index.ts            # Export file
│   └── index.ts                     # Main export file
├── .storybook/                      # Storybook configuration
├── dist/                            # Built library (generated)
└── storybook-static/                # Built Storybook (generated)
```

## Publishing to npm

1. Update version in package.json
2. Build the library: `npm run build`
3. Login to npm: `npm login`
4. Publish: `npm publish`

## License

ISC
