import { createBrowserRouter, Outlet, RouterProvider } from 'react-router' 
import SideMenuPage from './components/SideMenu'
import DashboardPage from './pages/DashboardPage'
import { useSelector } from 'react-redux'
import type { RootState } from './states/Store'
import LoginPage from './pages/login/LoginPage'

function App(){
  const {isLogin} = useSelector((state: RootState) => state.login)
  const router = createBrowserRouter(
    isLogin ? 
    [{
      element: <SideMenuPage content={<Outlet />} />,
      children: [
        {
          path: "",
          element: <DashboardPage />
        }
      ]

    }] : [
      {
        path: "",
        element: <LoginPage />
      }
    ]
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App