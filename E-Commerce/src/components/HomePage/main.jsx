import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from '../Products/Products.jsx'
import { store } from '../../store/store.js'
import { Provider } from 'react-redux'
import Product from '../Product/Product.jsx'
import ErrorPage from '../ErrorPage/ErrorPage.jsx'
import SearchResult from '../SearchResult/SearchResult.jsx'
import Login from "./Login/Login.jsx"
import SignUp from './Login/Signup.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },{
    path: "/products/:category",
    element: <Products />
  },{
    path: "/product/:product",
    element: <Product />
  },
  {
    path: "/searchResult",
    element: <SearchResult />
  },
  // {
  //   path: "/notfound",
  //   element: <ErrorPage />
  // },
  {
    path: "*",
    element: <ErrorPage />
  },{
    path: "/login",
    element: <Login />
  },{
    path: "/signup",
    element: <SignUp />
  }
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Provider store={store}>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </Provider>
    
   
  </React.StrictMode>,
)
