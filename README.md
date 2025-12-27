# Quiz Application

A modern, interactive quiz application built with React, featuring dynamic question fetching from the Open Trivia Database API. This application provides an engaging user experience with customizable quiz parameters, real-time scoring, and responsive design.

## 🚀 Features

- **Dynamic Quiz Generation**: Fetch questions from the Open Trivia Database API with customizable parameters
- **Category Selection**: Choose from 20+ trivia categories including Entertainment, Science, History, and more
- **Difficulty Levels**: Select from Easy, Medium, or Hard difficulty levels
- **Flexible Question Count**: Choose between 1-20 questions per quiz session
- **Real-time Scoring**: Track correct answers and display final score with percentage
- **Responsive Design**: Optimized for desktop and mobile devices using Tailwind CSS
- **Error Handling**: Comprehensive error handling for API failures, rate limits, and network issues
- **Loading States**: Smooth user experience with loading indicators during data fetching
- **Single Page Application**: Fast navigation using React Router with client-side routing

## 🛠️ Technology Stack

### Frontend Framework
- **React 18** - Modern JavaScript library for building user interfaces
- **React Router DOM** - Declarative routing for React applications

### Styling
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development

### Build Tool & Development
- **Vite** - Fast build tool with Hot Module Replacement (HMR)
- **ESLint** - JavaScript linting utility for code quality

### API Integration
- **Open Trivia Database API** - Free RESTful API for trivia questions

### Development Tools
- **npm** - Package management and script running
- **Git** - Version control system

## 📋 Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (version 16.0.0 or higher)
- **npm** (comes with Node.js) or **yarn**
- **Git** (for cloning the repository)

You can verify installations with:
```bash
node --version
npm --version
git --version
```

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Allen-Tanaka/alx-fe-capstone-quiz-app.git
   cd alx-fe-capstone-quiz-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📖 Usage

### Starting a Quiz

1. **Select Category**: Choose from available trivia categories (e.g., General Knowledge, Entertainment, Science)
2. **Choose Difficulty**: Select Easy, Medium, or Hard
3. **Set Question Count**: Specify number of questions (1-20)
4. **Start Quiz**: Click the "Start Quiz" button to begin

### Taking the Quiz

- Read each multiple-choice question carefully
- Click on your selected answer
- The application automatically proceeds to the next question
- Questions are shuffled randomly for each session

### Viewing Results

- After completing all questions, view your final score
- See total correct answers and percentage score
- Option to restart or return to home

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── QuestionCard.jsx # Individual question display component
│   ├── QuizStart.jsx    # Quiz configuration form
│   └── ScoreSummary.jsx # Results display component
├── pages/               # Route-based page components
│   ├── Home.jsx         # Landing page with quiz setup
│   ├── Quiz.jsx         # Main quiz interface
│   └── Results.jsx      # Score display page
├── services/            # API integration and data services
│   └── triviaApi.js     # Open Trivia Database API client
├── App.jsx              # Main application component with routing
├── main.jsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🔌 API Reference

### Open Trivia Database API

The application integrates with the [Open Trivia Database API](https://opentdb.com/api_config.php):

#### Categories Endpoint
```
GET https://opentdb.com/api_category.php
```
Returns available trivia categories.

#### Questions Endpoint
```
GET https://opentdb.com/api.php?amount={count}&category={id}&difficulty={level}&type=multiple
```
Parameters:
- `amount`: Number of questions (1-20)
- `category`: Category ID (optional)
- `difficulty`: easy|medium|hard
- `type`: multiple (multiple choice questions)

#### Response Codes
- `0`: Success
- `1`: No Results
- `2`: Invalid Parameter
- `5`: Rate Limit Exceeded

## 🧪 Error Handling

The application includes comprehensive error handling:

- **Rate Limiting**: Displays user-friendly message when API rate limit is exceeded
- **Network Errors**: Handles connection failures with retry options
- **Invalid Responses**: Graceful handling of malformed API responses
- **Loading States**: Prevents user interaction during data fetching

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Deployment Options

The built application can be deployed to:
- **Vercel**: Connect GitHub repository for automatic deployments
- **Netlify**: Drag-and-drop `dist/` folder or connect repository
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Traditional Hosting**: Upload `dist/` contents to any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow React best practices and hooks guidelines
- Maintain consistent code style with ESLint
- Write descriptive commit messages
- Test components thoroughly before submitting PRs
- Update documentation for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Open Trivia Database](https://opentdb.com/) for providing the trivia questions API
- [React](https://reactjs.org/) for the excellent frontend framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the fast development experience

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/Allen-Tanaka/alx-fe-capstone-quiz-app/issues) page
2. Create a new issue with detailed description
3. Include browser console errors if applicable
4. Provide steps to reproduce the problem

---

**Built with ❤️ using React and Tailwind CSS**
