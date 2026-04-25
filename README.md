# BgChanger - React Card Display

A modern React application built with Vite and Tailwind CSS that showcases reusable card components. This project demonstrates React best practices including component composition, state management, and responsive UI design.

## 🎯 Features

- **Reusable Card Component**: Display cards with images, titles, descriptions, and tags
- **Responsive Design**: Built with Tailwind CSS for mobile-friendly layouts
- **Modern Stack**: React 19 + Vite for fast development and optimized builds
- **ESLint Configuration**: Code quality and consistency checks
- **Hot Module Replacement (HMR)**: Instant updates during development

## 🛠️ Tech Stack

- **React**: 19.2.4 - UI library
- **Vite**: 8.0.1 - Build tool and dev server
- **Tailwind CSS**: 4.2.2 - Utility-first CSS framework
- **ESLint**: Code linting and quality assurance

## 📦 Installation

1. Clone or navigate to the project directory:
   ```bash
   cd BgChanger
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🚀 Getting Started

### Development Server

Start the development server with hot module replacement:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Linting

Check code quality with ESLint:
```bash
npm run lint
```

## 📁 Project Structure

```
BgChanger/
├── src/
│   ├── components/
│   │   └── Card.jsx          # Reusable card component
│   ├── App.jsx               # Main application component
│   ├── App.css               # Application styles
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles
├── public/                   # Static assets
├── package.json              # Project dependencies
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint rules
└── index.html                # HTML entry point
```

## 📝 Components

### Card Component

The `Card` component accepts a card object with the following structure:

```javascript
{
  title: "Card Title",
  description: "Card description text",
  image: "https://example.com/image.jpg",
  tags: ["#tag1", "#tag2", "#tag3"]
}
```

**Features:**
- Displays card image
- Shows title and description
- Renders tags with styling
- Responsive design with shadow effects

## 💡 Usage Example

```jsx
import Card from './components/Card'

function App() {
  const card = {
    title: "My Card",
    description: "This is my card description",
    image: "https://example.com/image.jpg",
    tags: ["#react", "#vite", "#tailwind"]
  }

  return <Card card={card} />
}
```

## 🎨 Styling

This project uses Tailwind CSS with utility classes. Customize styles by:
- Modifying Tailwind classes in component JSX files
- Creating custom CSS in `.css` files
- Extending Tailwind configuration in `tailwind.config.js`

## 🔍 ESLint Configuration

ESLint is configured to check:
- React hooks best practices
- React refresh compatibility
- General code quality

Run linting with: `npm run lint`

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [ESLint Documentation](https://eslint.org)

## 📄 License

This is a practice project from "React by Chai aur Code"

## 🎓 Notes

This project is created for learning React fundamentals including:
- Component composition
- Props management
- State handling with React hooks
- Responsive UI with Tailwind CSS
- Build tools and development workflows
