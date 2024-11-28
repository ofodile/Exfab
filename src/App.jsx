import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Masturbation from './components/Masturbation';
import Blowjob from './components/Blowjob';
import Lesbian from './components/Lesbian';
import Teen from './components/Teen';
import Celebrities from './components/Celebrities';
import Home from './pages/Home';
import VideoPage from './pages/VideoPage';
import SearchResult from './components/SearchResult';
import "./css/Video.css";
import "./App.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: '/blowjob',
    element: (
      <>
        <Navbar />
        <Blowjob />
        <Footer />
      </>
    ),
  },
  {
    path: '/lesbian',
    element: (
      <>
        <Navbar />
        <Lesbian />
        <Footer />
      </>
    ),
  },
  {
    path: '/teen',
    element: (
      <>
        <Navbar />
        <Teen />
        <Footer />
      </>
    ),
  },
  {
    path: '/celebrities',
    element: (
      <>
        <Navbar />
        <Celebrities />
        <Footer />
      </>
    ),
  },
  {
    path: '/masturbation',
    element: (
      <>
        <Navbar />
        <Masturbation />
        <Footer />
      </>
    ),
  },
  {
    path: '/video/:slug',
    element: (
      <>
        <Navbar />
        <VideoPage />
        <Footer />
      </>
    ),
  },
    {
    path: '/searchresult',
    element: (
      <>
        <Navbar />
        <SearchResult />
        <Footer />
      </>
    ),
  },
]);

const App = () => {
  return (
    <SkeletonTheme baseColor="#D3D3D3" highlightColor="white">
      <RouterProvider router={router}>
        <ScrollRestoration />
      </RouterProvider>
    </SkeletonTheme>
  );
};

export default App;
