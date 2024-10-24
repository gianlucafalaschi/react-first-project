import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar></Navbar> */}
      <div className='grid grid-cols-4 gap-5'>
        <Card title="Tokyo" imgUrl="https://images.unsplash.com/photo-1633632860411-364d4dc29309?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, animi quidem.
        </Card>
        <Card title="New York" imgUrl="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat recusandae non deleniti harum. Molestias?
        </Card>
        <Card title="Rome" imgUrl="https://images.unsplash.com/photo-1529154036614-a60975f5c760?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, est.
        </Card>
        <Card title="Paris" imgUrl="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Card>
      </div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> 
      <h1>Vite + React</h1> */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
