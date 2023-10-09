import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../pages/HomePage';
import Board from '../pages/board/Board';
import styled from 'styled-components';
import Rules from '../pages/rules/Rules';
import Join from '../pages/join/Join';
import Harassment from '../pages/harassment/Harassment';
import Noticeboard from '../pages/noticeboard/Noticeboard';
import Login from '../pages/loginpage/Login';
import Register from '../pages/register/Register';

const FrameDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 3rem 0rem 3rem 0rem;
  background: #151515;

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
            <Route path="/noticeboard" Component={Noticeboard} />
            <Route path="/rules" Component={Rules} />
            <Route path="/join" Component={Join} />
            <Route path="/harassment" Component={Harassment} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
          </Routes>
        </FrameDiv>
      </Router>
    </div>
  );
};

export default NavBarRouter;
