import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Home } from './pages/Home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MovieDetail } from './pages/MovieDetail.jsx';
import { Layout } from './pages/Layout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // layout fixo
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/filme/:id",
        element: <MovieDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
