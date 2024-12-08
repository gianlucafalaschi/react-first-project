import './App.css'
import Navbar from './components/Navbar'
import NewNavbar from './components/NewNavbar'
import Card from './components/Card'
import CardForm from './components/CardForm'
import TestTailwind from './components/TestTailwind'
import Example from './components/Example'
import { ProvaContext } from './stores/ProvaContext'
// Importing the useSelector hook from React Redux to access the Redux store state
import { useSelector } from 'react-redux'




function App() {
  // Accessing the cities state from the Redux store
  const cities = useSelector((state) => state.cities.value);

  return (
    <>
      <NewNavbar></NewNavbar>
      <Example></Example>
      <CardForm></CardForm>
      {/* <Navbar></Navbar> */}
      <div className='grid grid-cols-4 gap-5 mb-3'>
        {/* LIST RENDERING - Using array.map to iterate over 
        each city and render a Card component for each 
        -  Remember to add the key id  when use the map  */ }
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
