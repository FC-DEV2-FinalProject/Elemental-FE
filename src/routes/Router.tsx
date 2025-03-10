import { ROUTER_PATH } from '@/constants/constant'
import Layout from '@/Layout'
import Home from '@/pages/home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: ROUTER_PATH.HOME, element: <Home /> }]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
