import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/citiesSlice";




function CardForm() {
    /* Create the initial State of the form */
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        imgUrl: "",
        isVisited: false,
    });
    // Handle input changes for all form fields
    function handleInputChange(e) {
        const {name, value, type, checked } = e.target;
        const inputValue = type == "checkbox" ? checked : value;
        setFormData({
            ...formData,  // Keep the existing form data
            [name] : inputValue, // Update only the specific field
        });
    };

    /* I put event as argument of the function and prevent the default behavior
    (refresh the page when I submit the form). The page cannot be refreshed or the components starts from the beginning */
    function handleSubmit(e) {   
        e.preventDefault();
        const newCity = {
            id: Math.random(), // Generate a random ID for the new city
            title: formData.title,
            description: formData.description,
            imgUrl: formData.imgUrl,
            isVisited: formData.isVisited,
        };
        
        // Reset the form state to its initial values
        setFormData({
            title: "",
            description: "",
            imgUrl: "",
            isVisited: false,
        });
        // Dispatch the add action to add the new city to the Redux store
        dispatch(add(newCity));
    };


    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80 mb-10 bg-zinc-900 p-5 rounded-lg">
            <div className="flex flex-col">
                <label>Title of the city</label>
                <input className="bg-zinc-600" type="text" name="title" value={formData.title} onChange={handleInputChange}  />
            </div>
            <div className="flex flex-col">
                <label>Description</label>
                <textarea className="bg-zinc-600" name="description" value={formData.description} onChange={handleInputChange}  ></textarea>
            </div>
            <div className="flex flex-col">
                <label>Image</label>
                <input className="bg-zinc-600" type="text" name="imgUrl" value={formData.imgUrl} onChange={handleInputChange}  />
            </div>
            <div className="flex flex-col">
                <label>Is Visited?</label>
                <input type="checkbox" name="isVisited" checked={formData.isVisited} onChange={handleInputChange} />
            </div>

            <button className="bg-zinc-950" type="submit">Add Card</button>
        </form>
    );
}

export default CardForm;