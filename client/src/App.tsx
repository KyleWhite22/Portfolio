import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppShell from './ui/AppShell'
import Home from './pages/Home'
import Personal from './pages/Personal'
import Education from './pages/Education'
import Work from './pages/Work'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <Home /> },
      { path: 'personal', element: <Personal /> },
      { path: 'education', element: <Education /> },
      { path: 'work', element: <Work /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
