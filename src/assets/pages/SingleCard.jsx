import NewNavbar from "../../components/NewNavbar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"; // Importing the useParams hook from React Router
import { useLocation } from "react-router-dom"; // Importing the useParams and useLocation hooks from React Router ( to control in which case NewNavbar appears)

function SingleCard(){
    // Extracting the cardID parameter from the URL
    const { cardID } = useParams();
    console.log(cardID);

    // Accessing the cities state from the Redux store and filtering for the city with the matching cardID
    const cities = useSelector((state) =>
        state.cities.value.filter((city) => city.id == cardID.toString())
    );

    console.log(cities);
    
    // Getting the current location
    const location = useLocation();
    console.log(location);
    return(
        <>
            {/* Conditionally rendering NewNavbar based on the current URL */}
            {!location.pathname.includes("/cards-children/") && <NewNavbar></NewNavbar>}

            <h1 className="text-3xl font-bold">{cities[0].title}</h1>
            <div className="flex flex-col p-4">
                {cities[0].isVisited && (
                    <span className="text-green-400"><i className="fa-solid fa-check"></i> Visited</span>
                )}
                {!cities[0].isVisited && (
                    <span className="text-red-400"><i className="fa-solid fa-check"></i> Not Visited</span>
                )}
            </div>
            
            <img src={cities[0].imgUrl} alt="" width="500"/>

        </>
    );
}

export default SingleCard;