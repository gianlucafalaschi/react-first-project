import NewNavbar from "../../components/NewNavabar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"; // Importing the useParams hook from React Router



function SingleCard(){
    // Extracting the cardID parameter from the URL
    const { cardID } = useParams();
    console.log(cardID);

    // Accessing the cities state from the Redux store and filtering for the city with the matching cardID
    const cities = useSelector((state) =>
        state.cities.value.filter((city) => city.id == cardID.toString())
    );

    console.log(cities);

    return(
        <>
            <NewNavbar></NewNavbar>

            <h1 className="text-3xl font-bold">{cities[0].title}</h1>
            <div className="flex flex-col p-4">
                {cities[0].isVisited && (
                    <span className="text-green-400">Visited</span>
                )}
                {!cities[0].isVisited && (
                    <span className="text-red-400">Not Visited</span>
                )}
            </div>
            
            <img src={cities[0].imgUrl} alt="" width="500"/>

        </>
    );
}

export default SingleCard;