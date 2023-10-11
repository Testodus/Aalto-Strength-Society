import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import {
  Board,
  Join,
  Harassment,
  Login,
  Register,
  Rules,
  ProfileElement,
  HomePage,
  Noticeboard,
} from './pages/pages';
import { profileLoader } from './loaders/loaders';

const RoutesJSX = (
  <>
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route
        path={'profile/:userID'}
        loader={profileLoader}
        element={<ProfileElement />}
      />
      <Route path={'board'} element={<Board />} />
      <Route path={'noticeboard'} element={<Noticeboard />} />
      <Route path={'rules'} element={<Rules />} />
      <Route path={'join'} element={<Join />} />
      <Route path={'harassment'} element={<Harassment />} />
      <Route path={'login'} element={<Login />} />
      <Route path={'register'} element={<Register />} />
    </Route>
  </>
);

const routes = createRoutesFromElements(RoutesJSX);

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
