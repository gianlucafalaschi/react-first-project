import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import CardForm from './components/CardForm'
import TestTailwind from './components/TestTailwind'
import Example from './components/Example'

function handleClick() {
  alert("sono la funzione handleClick");
}
/* e is the event
target è l'elemento su cui è avvenuto l'evento, come un input di testo. 
value è la proprietà che contiene il valore corrente dell'elemento dell'input.*/
function handleChange(e) {
  console.log(e.target.value);
}

function handleSubmit(e) {
  e.preventDefault();
  console.log(e);
}


function App() {
  /* STATES */
  /* count e' la variabile che rappresenta lo stato corrente (valore impostato a 0, setCount e' la funzione per settarlo. useState e'un hook di react, un array di 2 elementi: - [0, ƒ]  valore di count e la funzione setCount)  */
  const [count, setCount] = useState(0);
  /* a State can be also an array */
  const [items, setItems] = useState([1, 2, 3]);
  /* a State can be an object  */
  const [user, setUser] = useState({ name: "Alice", age: 30 });
  /* State per la chiamata http in useEffect */
  const [data, setData] = useState([]);

  /*  console.log(items);
   console.log(user); */

  /* arrow function to add new items */
  const addItem = () => {
    const newItem = 4;
    setItems([...items, newItem])    /* ...items is the spread operator */
  };
  console.log(items);

  /* Arrow function che sostituisce aggiorna lo user  */
  const updateUserName = () => {
    const updateUser = { ...user, name: "Bob" };
    setUser(updateUser);
    console.log(user);
  };

  /* se invece dello state usassi una normale variabile per il count rimarrebbe sempre a 0, perchè la function App() verrebbe fatta ripartire ogni volta che premo il pulsante, ripartendo da 0  */
  let conteggio = 0;


  useEffect(() => {
    // document.title = `Conteggio: ${count}`;
    // console.log('Ciao da useEffect');
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => { setData(data), console.log(data) });
  }, [count]);


  /*   const cities = [
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
  ]; */

  /* In order to use the component CardForm to add a new city with a form,
  a need to transform the array of object (above) with all the city into a State  */

  const [cities, setCities] = useState([
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
  ]);

  /* arrow function to add new card */
  /* const addCity = (newCity) => {
  setCities([...cities, newCity]);
  }; 
  OR */
  /*normal  function to add new card  */
  function addCity(newCity) {
    setCities([...cities, newCity]);
  }
  
  
  return (
    <>
      <Example cities={cities}></Example>
      {/* Component with a form to add a new city, I pass the function addCity as a props */}
      <CardForm addCity={addCity}></CardForm>
      {/* <Navbar></Navbar> */}
      <div className='grid grid-cols-4 gap-5 mb-3'>
        {/* To print this city I took the data above but it is not a good way to work, because I don't know how many city are there, better use the List Rendering */}
        {/* <Card
          isVisited={cities[0].isVisited} 
          title={cities[0].title} 
          imgUrl={cities[0].imgUrl}>
          {cities[0].description}
          </Card> */}

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
                imgUrl={city.imgUrl}
                counter={count}>     {/* Posso passare lo STATE del count  */}
                {city.description}
              </Card>
            ))}
        </div>
        
        {/* Data from HTTP call */}
        <div>
          <div className='grid grid-cols-4 gap-5'>
            {data.map((item) => (
              <div key={item.id} className=' bg-slate-400 rounded-lg p-3'>
                <p className='text-blue-950 mb-3'>User Id: {item.userId}</p>
                <h2 className='text-xl mb-3'>{item.title}</h2>
                <p className='text-gray-800'>{item.body}</p>
              </div>
          ))}
          </div>
        </div>

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

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* dimostrazione che senza STATE il conteggio non verrebbe aggiornato, anche se nel console.log funziona */}
        <button onClick={function conteggioIncreased() { console.log(conteggio++) }}>
          conteggio is {conteggio}
        </button>

        {/* Add Items function */}
        <button onClick={addItem}>
          add Item
        </button>
        {/* Update user function */}
        <button onClick={updateUserName}>
          update user
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
      {/* Component TestTailwind */}
      {/* <TestTailwind></TestTailwind> */}

    </>
  )
}

export default App
