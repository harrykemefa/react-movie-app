// Handle Routing

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Styles
import { GlobalStyles } from './GlobalStyles';
// Components
import Header from './components/Header';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import NotFound from './components/NotFound';
const App = () => (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:movieId' element={<MovieDetails />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
   
      <GlobalStyles />
    </Router>
  );


export default App;
