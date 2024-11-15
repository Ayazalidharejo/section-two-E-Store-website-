
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';
import ErrorPage from './components/errorpage/ErrorPage';


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <  Header/>,errorElement:<ErrorPage/>
    },
    {
      path:"/Signin",element:    <Signin/>,
    },
    {
path:"/Signup", element:   <Signup/>,
    }
  ])
  return (
    <div>
 
     
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
