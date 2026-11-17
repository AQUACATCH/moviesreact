import {createBrowserRouter, RouterProvider} from 'react-router'
import { useState } from 'react'
import './App.css'
import { Home } from './Pages/Home'
import { Movies } from './Pages/Movies'
import { SearchMedia } from './Pages/SearchMedia'
import { TVShows } from './Pages/TVShows'
import { NotFound } from './Pages/NotFound'
import { MyHeader } from './components/MyHeader'

const myrouter = createBrowserRouter([
  {
    element:<MyHeader/>,
    children:[
      {path:'/', element:<Home/>},
      {path:'/movies', element:<Movies/>},
      {path:'/search', element:<SearchMedia/>},
      {path:'/tv', element:<TVShows/>},
      {path:'*', element:<NotFound/>},
    ],
  }
])

function App() {

  return <div className='bg-gray-700 min-h-screen text-white'><RouterProvider router={myrouter}/></div>
}

export default App
