import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contacts from './assets/pages/Contacts.jsx'
import About from './assets/pages/About.jsx'
import Cards from './assets/pages/Cards.jsx'
import SingleCard from './assets/pages/SingleCard.jsx'

// Importing the Redux store from the configured store file
import store from './redux/store.js'
// Importing the Provider component from React Redux to make the Redux store available to the app
import { Provider } from 'react-redux'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "contacts",
    element: <Contacts></Contacts>,
  },
  {
    path: "about",
    element: <About></About>,
  },
  {
    path: "cards",
    element: <Cards></Cards>,
  },
  {
    path: "cards/:cardID",
    element: <SingleCard/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  {/* Providing the Redux store to the application */}
      <RouterProvider router={router}/> 
      {/* <App /> */} {/* RouterProviider instead of App */}
    </Provider>
  </StrictMode>,
)
