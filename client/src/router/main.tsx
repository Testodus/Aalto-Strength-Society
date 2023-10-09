import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../pages/HomePage';
import Board from '../pages/board/Board';
import styled from 'styled-components';
import Contact from '../pages/contact/Contact';
import Rules from '../pages/rules/Rules';
import Join from '../pages/join/Join';
import Harassment from '../pages/harassment/Harassment';

const FrameDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 3rem 0rem 3rem 0rem;

  @media only screen and (max-width: 640px) {
    padding: 2rem 0rem 2rem 0rem;
  }
`;

const NavBarRouter = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <FrameDiv>
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/board" Component={Board} />
            <Route path="/contact" Component={Contact} />
            <Route path="/rules" Component={Rules} />
            <Route path="/join" Component={Join} />
            <Route path="/harassment" Component={Harassment} />
          </Routes>
        </FrameDiv>
      </Router>
    </div>
  );
};

export default NavBarRouter;
