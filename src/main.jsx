import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('chttps://coffee-store-server-theta-indol.vercel.app/coffees'),
        Component: Home
      },
      {
        path: 'addCoffee',
        Component: AddCoffee
      },
      {
        path: 'coffee/:id',
        Component: CoffeeDetails
      },
      {
        path: 'updateCoffee/:id',
        loader: ({ params }) => fetch(`chttps://coffee-store-server-theta-indol.vercel.app/coffees/${params.id}`),
        Component: UpdateCoffee
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider
      router={router}
      fallbackElement={<div>Loading...</div>}
    />
  </StrictMode>,
)