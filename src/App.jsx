import { useState, useEffect, useReducer, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import CardForm from './components/CardForm'
import TestTailwind from './components/TestTailwind'
import Example from './components/Example'
import { ProvaContext } from './stores/ProvaContext'
import { useSelector } from 'react-redux'



function App() {
  const cities = useSelector((state) => state.cities.value);

  return (
    <> 
      <Example></Example>
      <CardForm></CardForm>
      {/* <Navbar></Navbar> */}
      <div className='grid grid-cols-4 gap-5 mb-3'>        
        {/* LIST RENDERING - with array.maps I scroll all the 
        elements in the array -  Remember to add the key id  when use the map  */ }
        {cities.map((city) => (
          <Card
            key={city.id}
            title={city.title}
            isVisited={city.isVisited}
            imgUrl={city.imgUrl}>
            {city.description}
          </Card>
        ))}
      </div>
      {/* LIST RENDERING WITH FILTER */}
      <div className='grid grid-cols-4 gap-5 mb-3'>
        <div>LIST RENDERING WITH FILTER</div>
        {cities
          .filter((city) => !city.isVisited)
          .map((city) => (
            <Card
              key={city.id}
              title={city.title}
              isVisited={city.isVisited}
              imgUrl={city.imgUrl}>
              {city.description}
            </Card>
          ))}
      </div>
    </>
  );
}

export default App
