// Create a custom hook
import { useEffect } from "react";

// Custom hook that logs a random number every second
function useCounterTest(){
    useEffect(() =>{
        // setInterval sets up a function to be called every 1000 milliseconds (1 second)
        const intervalID = setInterval(()=> {
            // Generate a random number between 0 and 99
            const randomNumber = Math.floor(Math.random() * 100)
            console.log(randomNumber)
        }, 1000);

        // Cleanup function to clear the interval when the component unmounts
        return () => {
            clearInterval(intervalID)
        }
    }, []); // with []  useCounterTest starts only when component mount
}

export default useCounterTest;