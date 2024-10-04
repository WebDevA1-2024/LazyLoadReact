import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Lazy load the components
const VideoPlayer = React.lazy(() => import('./components/VideoPlayer'));
const LazyComponent = React.lazy(() => import('./components/LazyComponent'));
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const ErrorBoundary = React.lazy(() => import('./components/ErrorBoundary'));

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>

        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes> {/* Ganti Switch dengan Routes */}
              <Route path="/" element={<Home />} /> {/* Ganti component dengan element */}
              <Route path="/about" element={<About />} /> {/* Sama seperti ini */}
            </Routes>

            <div className="lazy-components">
              <h2>Lazy Loaded Components</h2>
              <VideoPlayer />
              <LazyComponent />
            </div>
          </Suspense>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
