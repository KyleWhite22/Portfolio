// src/App.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProAppShell from './ui/ProAppShell'
import PerAppShell from './ui/PerAppShell'
import ProHome from './pages/ProfessionalHome'
import PerHome from './pages/PersonalHome'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProAppShell />,
    children: [
      { index: true, element: <ProHome /> }
    ],
  },
  {
    path: '/personal',
    element: <PerAppShell />,
    children: [
        {index: true, element: <PerHome />}
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}