import React from 'react';
import App from '../App';
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
  ViewNotice,
  Announcement,
  NoticeEditor,
  EditProfile,
} from '../pages/pages';
import {
  profileLoader,
  noticeLoader,
  noticeLoaderEditor,
} from '../loaders/loaders';
import { ProtectedRoute } from '../routes/protectedRoute';

/**
 * This is the router configuration:
 *
 *  '/' leads to app (this is the frame for the whole application)
 *  Because App-itself does not display any content in the content-section of the website we have defined a index-element (HomePage)
 *
 *  App has an <Outlet/> -component inside it, this is where the router will be displayed. For example when landing that is the location of Homepage.
 *
 *  For pages that need to load data according to url-parameters: provide a loarder. see. profileLoader
 *
 * Profile pages: are behind protected route
 */

const Routes = () => {
  const Routes = (
    <>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route
          path={'view-notice/:noticeID'}
          loader={noticeLoader}
          element={<ViewNotice />}
        />
        <Route path={'board'} element={<Board />} />
        <Route path={'noticeboard'} element={<Noticeboard />} />
        <Route path={'rules'} element={<Rules />} />
        <Route path={'join'} element={<Join />} />
        <Route path={'harassment'} element={<Harassment />} />
        <Route path={'login'} element={<Login />} />
        <Route path={'register'} element={<Register />} />
        <Route path={'out'} element={<Announcement />} />
        <Route path={'in'} element={<Announcement />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route
            path={'profile/:userID'}
            loader={profileLoader}
            element={<ProfileElement />}
          />
          <Route path={'edit-profile'} element={<EditProfile />} />
          <Route
            path={'notice-editor/:noticeID'}
            loader={noticeLoaderEditor}
            element={<NoticeEditor newNotice={false} />}
          />
          <Route
            path={'notice-editor/new-notice'}
            element={<NoticeEditor newNotice={true} />}
          />
        </Route>
      </Route>
    </>
  );

  // The routes created based on the JSX-elements
  const routes = createRoutesFromElements(Routes);

  // the router composed from the routes
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default Routes;
