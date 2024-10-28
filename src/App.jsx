import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/card'

function handleClick(){
  alert("sono la funzione handleClick");
}
/* e is the event
target è l'elemento su cui è avvenuto l'evento, come un input di testo. 
value è la proprietà che contiene il valore corrente dell'elemento dell'input.*/
function handleChange(e){
  console.log(e.target.value);
}

function handleSubmit(e){
  e.preventDefault();
  console.log(e);
}


function App() {
  const [count, setCount] = useState(0);
  const cities = [
    {
      id: 0,
      title: "Tokyo",
      description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti omnis, sint, aliquam officia iusto fugit, earum saepe ullam placeat minus accusamus. Cupiditate sint officia qui ea, reiciendis ad molestias.",
      imgUrl: 
        "https://images.unsplash.com/photo-1633632860411-364d4dc29309?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true,  
    },
    {
      id: 1,
      title: "New York",
      description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi reprehenderit quibusdam nulla odio ullam commodi! Aliquid consequatur, officiis, saepe voluptatibus officia provident voluptates dignissimos ullam rerum excepturi ipsa enim?",
      imgUrl: 
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: false,  
    },
    {
      id: 2,
      title: "Rome",
      description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti omnis, sint, aliquam officia iusto fugit, earum saepe ullam placeat minus accusamus. Cupiditate sint officia qui ea, reiciendis ad molestias.",
      imgUrl: 
        "https://images.unsplash.com/photo-1529154036614-a60975f5c760?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true,  
    },
    {
      id: 3,
      title: "Paris",
      description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti omnis, sint, aliquam officia iusto fugit, earum saepe ullam placeat minus accusamus. Cupiditate sint officia qui ea, reiciendis ad molestias.",
      imgUrl: 
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: false,  
    },
  ];

  return (
    <>
      {/* <Navbar></Navbar> */}
      <div className='grid grid-cols-4 gap-5'>
        {/* To print this city I took the data above but it is not a good way to work, because I don't know how many city are there, better use the List Rendering */}
        {/* <Card
          isVisited={cities[0].isVisited} 
          title={cities[0].title} 
          imgUrl={cities[0].imgUrl}>
          {cities[0].description}
        </Card> */}

        {/* LIST RENDERING - with array.maps I scroll all the 
        elements in the array -  Remember to add the key id  when use the map  */ }
        {cities.map((city)=> (
          <Card
            key={city.id}
            title={city.title}
            isVisited={city.isVisited}
            imgUrl={city.imgUrl}>
            {city.description}
          </Card>
        ))}
        {/* LIST RENDERING WITH FILTER */}
        <div>LIST RENDERING WITH FILTER</div>
        {cities
          .filter((city) =>!city.isVisited)
          .map((city) => (
          <Card
            key={city.id}
            title={city.title}
            isVisited={city.isVisited}
            imgUrl={city.imgUrl}>
            {city.description}
          </Card>
        ))}
  
        {/* <Card
          isVisited={false} 
          title="New York" 
          imgUrl="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat recusandae non deleniti harum. Molestias?
        </Card>
        <Card 
          isVisited={true}
          title="Rome" 
          imgUrl="https://images.unsplash.com/photo-1529154036614-a60975f5c760?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, est.
        </Card>
        <Card
          isVisited={false} 
          title="Paris" 
          imgUrl="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Card> */}
      </div>
      
      <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <button onClick={() => alert("ciao, sono una arrow function")}>
            Arrow Function Alert
          </button>
          <button onClick={handleClick}>
            Normal Function Alert
          </button>
          <input type="text" onChange={handleChange} />
          {/* with the function handleSubmit I want to prevent the standard
          behaviour of the submit button (the page refresh) because this is a 
          single page application  */}
          <form onSubmit={handleSubmit} >
            <button type='submit'>Submit Form</button>
          </form>
      </div>
      
    </>
  )
}

export default App
