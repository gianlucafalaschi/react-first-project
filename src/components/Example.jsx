// Import the increment and decrement actions from the counterSlice
import { increment, decrement } from "../redux/counterSlice";
// Import the useSelector and useDispatch hooks from react-redux
import { useSelector, useDispatch } from "react-redux";

function Example() {
    // Use useSelector to get the current value of the counter from the Redux state 
    const count = useSelector((state) => state.counter.value);
    // Use useDispatch to get the Redux dispatch function
    const dispatch = useDispatch();

    return (
        <div className="mb-6">
            {/* Display the current counter value */}
            <p className="mb-3">Conteggio: {count}</p>
            <button
                className="mr-4"
                aria-label="Increment value"
                /* On click, dispatch the increment action */
                onClick={() => dispatch(increment())}>
                Increment +
            </button>
            <button
                aria-label="Decrement value"
                /* On click, dispatch the decrement action */
                onClick={() => dispatch(decrement())}>
                Decrement -
            </button>
        </div>
    );
}

export default Example;