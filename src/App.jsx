import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import NavBar from "./components/navbar"
import SocialMedia from './components/socialMedia';

const router = createBrowserRouter([{
  path: '/',
  element: ''
},
]);

export default function App() {
  return (
    <>
      <div className="w-screen h-screen px-[10rem] bg-[#17153B] overflow-hidden">
        <NavBar />
        <RouterProvider router={router}/>
        <SocialMedia />
      </div>
      </>
  )
}
