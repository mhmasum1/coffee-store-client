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
        loader: async () => {
          try {
            const response = await fetch('https://coffee-store-server-theta-indol.vercel.app/coffees');
            if (!response.ok) {
              throw new Error('Failed to fetch coffees');
            }
            return response.json();
          } catch (error) {
            console.error('Error loading coffees:', error);
            return [];
          }
        },
        Component: Home
      },
      {
        path: '/addCoffee',  // ✅ slash add করুন
        Component: AddCoffee
      },
      {
        path: '/coffee/:id',  // ✅ slash add করুন
        Component: CoffeeDetails
      },
      {
        path: '/updateCoffee/:id',  // ✅ slash add করুন
        loader: async ({ params }) => {
          try {
            const response = await fetch(`https://coffee-store-server-theta-indol.vercel.app/coffees/${params.id}`);
            if (!response.ok) {
              throw new Error('Failed to fetch coffee');
            }
            return response.json();
          } catch (error) {
            console.error('Error loading coffee:', error);
            return null;
          }
        },
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