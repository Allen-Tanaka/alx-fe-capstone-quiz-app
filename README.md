# Quiz Application

A modern, interactive quiz application built with React, featuring dynamic question fetching from the Open Trivia Database API. This application provides an engaging user experience with customizable quiz parameters, real-time scoring, and responsive design.

## 🚀 Features

- **Dynamic Quiz Generation**: Fetch questions from the Open Trivia Database API with customizable parameters
- **Category Search**: Search and filter through 20+ trivia categories in real-time
- **Category Selection**: Choose from 20+ trivia categories including Entertainment, Science, History, and more
- **Difficulty Levels**: Select from Easy, Medium, or Hard difficulty levels
- **Flexible Question Count**: Choose between 5-20 questions per quiz session
- **Real-time Scoring**: Track correct answers and display final score with percentage
- **Progress Indicator**: Shows current question number and total (e.g., "Question 3 of 10") during quiz
- **Detailed Review**: Review all questions with correct/incorrect answers after completion
- **Social Sharing**: Share quiz scores on social media platforms (Twitter, Facebook, WhatsApp) and challenge friends
- **Responsive Design**: Optimized for desktop and mobile devices using Tailwind CSS
- **Error Handling**: Comprehensive error handling for API failures, rate limits, and network issues
- **Loading States**: Smooth user experience with loading indicators during data fetching
- **Single Page Application**: Fast navigation using React Router with client-side routing
- **Session Management**: Automatic session token handling to prevent API rate limiting

## 🛠️ Technology Stack

### Frontend Framework
- **React 19** - Modern JavaScript library for building user interfaces with hooks
- **React Router DOM v7** - Declarative routing for React applications

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **PostCSS** - CSS processing tool with Autoprefixer for vendor prefixing

### Build Tool & Development
- **Vite** - Fast build tool with Hot Module Replacement (HMR) and optimized production builds
- **ESLint** - JavaScript linting utility for code quality and consistency

### API Integration
- **Open Trivia Database API** - Free RESTful API for trivia questions with automatic session token management
- **Web Share API** - Native sharing functionality with social media platform fallbacks

### Development Tools
- **npm** - Package management and script running
- **Git** - Version control system for collaborative development

## 📋 Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (version 18.0.0 or higher)
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

1. **Search Categories** (Optional): Use the search bar to filter categories by keywords (e.g., "science", "movies", "history")
2. **Select Category**: Choose from available trivia categories (e.g., General Knowledge, Entertainment, Science)
3. **Choose Difficulty**: Select Easy, Medium, or Hard
4. **Set Question Count**: Specify number of questions (5-20)
5. **Start Quiz**: Click the "Start Quiz" button to begin

### Category Search

- **Real-time Search**: Type keywords to instantly filter categories
- **Search Examples**: "science", "movies", "history", "sports", "music"
- **Result Counter**: Shows "X of Y categories found"
- **No Results**: Friendly message when no categories match
- **Clear Search**: One-click button to reset search and show all categories
- **Smart Selection**: Automatically clears category selection if filtered out

### Viewing Results

- After completing all questions, view your detailed score summary
- See total correct answers, percentage score, and individual question review
- Review each question with your selected answer and the correct answer
- **Share Your Score**: Use social sharing buttons to share results on Twitter, Facebook, or WhatsApp
- **Challenge Friends**: Share your score and challenge others to beat it
- Option to take another quiz or return to category selection

### Quiz Progress

- **Progress Indicator**: Shows current question number during quiz (e.g., "Question 3 of 10")
- **Real-time Updates**: Progress updates automatically as you advance through questions
- **Visual Feedback**: Clear indication of quiz completion status

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.jsx       # Main layout wrapper with background styling
│   ├── QuestionCard.jsx # Individual question display with answer selection
│   ├── QuizStart.jsx    # Quiz configuration form with category search
│   └── ScoreSummary.jsx # Results display with social sharing features
├── pages/               # Route-based page components
│   ├── Home.jsx         # Landing page with quiz setup and category search
│   └── QuizPage.jsx     # Main quiz interface with progress indicator
├── services/            # API integration and data services
│   └── triviaApi.js     # Open Trivia Database API client with session management
├── App.jsx              # Main application component with routing
├── App.css              # Additional application styles
├── main.jsx             # Application entry point
├── index.css            # Global styles and Tailwind CSS imports
└── assets/              # Static assets
    └── react.svg        # React logo 
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
GET https://opentdb.com/api.php?amount={count}&category={id}&difficulty={level}&type=multiple&token={token}
```
Parameters:
- `amount`: Number of questions (5-20)
- `category`: Category ID (optional)
- `difficulty`: easy|medium|hard
- `type`: multiple (multiple choice questions)
- `token`: Session token (automatically managed)

#### Session Token Management
The application automatically manages session tokens to prevent rate limiting:
- **Request Token**: `GET https://opentdb.com/api_token.php?command=request`
- **Reset Token**: `GET https://opentdb.com/api_token.php?command=reset&token={token}`

#### Response Codes
- `0`: Success
- `1`: No Results
- `2`: Invalid Parameter
- `3`: Session Token Not Set
- `4`: Session Token Empty
- `5`: Rate Limit Exceeded

## 🧪 Error Handling

The application includes comprehensive error handling:

- **Rate Limiting**: Automatic session token management prevents API rate limiting
- **Search Functionality**: User-friendly messages when no categories match search terms
- **Network Errors**: Handles connection failures with retry options
- **Invalid Responses**: Graceful handling of malformed API responses
- **Loading States**: Prevents user interaction during data fetching
- **Session Management**: Automatic token refresh and cleanup

## 📤 Social Sharing

Share your quiz achievements and challenge friends with built-in social sharing features:

### Sharing Options
- **Native Share**: Uses device's native sharing (mobile) or clipboard fallback (desktop)
- **Twitter**: Direct sharing to Twitter with pre-filled tweet
- **Facebook**: Facebook sharing dialog with score and challenge message
- **WhatsApp**: WhatsApp sharing with personalized message

### Share Message Format
```
"I scored 8/10 (80%) on this quiz! Can you beat my score? [App URL]"
```

### Browser Support
- **Modern Browsers**: Web Share API for native device sharing
- **Legacy Browsers**: Platform-specific URL schemes with fallback to clipboard
- **Mobile Optimized**: Enhanced sharing experience on mobile devices

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

**Built by Allen Muzorera using React 19, Tailwind CSS, and Vite**

*Last updated: 29 December 2025*
