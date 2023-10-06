import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../pages/HomePage';
import About from '../pages/about/About';

const NavBarRouter = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={About} />
        </Routes>
      </Router>
    </div>
  );
};

export default NavBarRouter;
