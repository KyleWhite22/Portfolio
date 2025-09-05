// src/App.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppShell from './ui/AppShell'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}