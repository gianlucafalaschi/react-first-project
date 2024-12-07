import NewNavbar from "../../components/NewNavabar";
import Card from "../../components/Card";
// Importing the useSelector hook from React Redux to access the Redux store state
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

function Cards() {
    // Accessing the cities state from the Redux store
    const cities = useSelector((state) => state.cities.value);

    return (
        <>
            <NewNavbar></NewNavbar>
            <h1 className="text-3xl font-bold">Cards page</h1>

            <div className='grid grid-cols-4 gap-5 mb-3'>
                {/* LIST RENDERING - Using array.map to iterate over 
        each city and render a Card component for each 
        -  Remember to add the key id  when use the map  */ }
                {cities.map((city) => (
                    <Link to={`/cards/${city.id} }`}>
                        <Card
                            key={city.id}
                            title={city.title}
                            isVisited={city.isVisited}
                            imgUrl={city.imgUrl}>
                            {city.description}
                        </Card>
                    </Link>
                ))}
            </div>
            
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

export default Cards;