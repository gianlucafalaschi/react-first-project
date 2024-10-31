
/* I need to send the data from the children element (Card Form) to the parents,
something similar to a contrary Props  */

/* I pass addCity as a props */
function CardForm({addCity}) {

    function handleClick(){
        const newCity = {
            id: 4,
            title: "Sydney",
            description: 
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, et?",
            imgUrl: 
            "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isVisited: false,  
        };
        addCity(newCity);
    }

    return(
        <div className="flex flex-col gap-3 w-80 mb-10">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button onClick={handleClick}>Add Card</button>
        </div>
    );
}

export default CardForm;