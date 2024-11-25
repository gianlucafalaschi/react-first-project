import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Importing the Redux store from the configured store file
import store from './redux/store.js'
// Importing the Provider component from React Redux to make the Redux store available to the app
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  {/* Providing the Redux store to the application */}
      <App />
    </Provider>
  </StrictMode>,
)
