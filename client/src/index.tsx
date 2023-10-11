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

/**
 * This is the router configuration:
 *
 *  '/' leads to app (this is the frame for the whole application)
 *  Because App-itself does not display any content in the content-section of the website we have defined a index-element (HomePage)
 *
 *  App has an <Outlet/> -component inside it, this is where the router will be displayed. For example when landing that is the location of Homepage.
 *
 *  For pages that need to load data according to url-parameters: provide a loarder. see. profileLoader
 */
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

// The routes created based on the JSX-elements
const routes = createRoutesFromElements(RoutesJSX);

// the router composed from the routes
const router = createBrowserRouter(routes);

// the root
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// rendering the root that is routered by the router (the App is defined in the Router configuration to be the frame)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
