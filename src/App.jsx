import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import NavBar from "./components/navbar"

const router = createBrowserRouter([{
  path: '/',
  element: ''
},
{
  path: '/home',
  element: <NavBar />
}
]);

export default function App() {
  return (
    <>
      <div className="w-screen h-screen px-[10rem] bg-[#17153B] overflow-hidden">
        <RouterProvider router={router}/>
      </div>
      </>
  )
}
