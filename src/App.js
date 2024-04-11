import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Layout from './Components/Layouts/Layout';
import Calendar from './pages/Calendar/Calendar'
import Boards from './pages/Board/Board'
const route=createBrowserRouter([
  {
    path:'',
    element:<Layout />,
    children:[
        {
          path:'dashboard',
          element:<Dashboard />
        },
        {
          path:'calendar',
          element:< Calendar/>
        },
        {
          path:'board',
          element:< Boards/>
        }
    ]
  },
])
function App() {
  return (
    <div id='dashboard'>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
