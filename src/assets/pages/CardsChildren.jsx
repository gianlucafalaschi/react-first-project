import NewNavbar from "../../components/NewNavbar";
import Card from "../../components/Card";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

function CardsChildren() {
    // Accessing the cities state from the Redux store
    const cities = useSelector((state) => state.cities.value);

    return (
        <>
            <NewNavbar></NewNavbar>
            <h1 className="text-3xl font-bold mb-10">Cards Children</h1>

            <div className='grid grid-cols-4 gap-5 mb-3'>
                {/* LIST RENDERING - Using array.map to iterate over 
        each city and render a Card component for each 
        -  Remember to add the key id  when use the map  */ }
                {cities.map((city) => (
                    <Link to={`/cards-children/${city.id}`} key={city.id}>
                        <Card
                            //key={city.id}
                            title={city.title}
                            isVisited={city.isVisited}
                            imgUrl={city.imgUrl}>
                            {city.description}
                        </Card>
                    </Link>
                ))}
            </div>
            <Outlet/>
        </>
    );
}

export default CardsChildren