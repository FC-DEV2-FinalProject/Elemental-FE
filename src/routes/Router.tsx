import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    element: '',
    children: [{ path: '/', element: '' }]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
