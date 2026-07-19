import {createBrowserRouter} from 'react-router';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Students from './pages/Students';
import StudentDetail from './pages/StudentDetail';
import About from './pages/About';
import Notfound from './pages/Notfound'

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: "students",
            element: <Students />
        },
        {
            path: "students/:id",
            element: <StudentDetail />
        },
        {
            path: "about",
            element: <About />
        },
         {
            path: "*",
            element: <Notfound />
        }
      ]
    }
])

export default router;