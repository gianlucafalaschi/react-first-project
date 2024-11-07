/* HOW TO USE useEffect
An Effect lets you keep your component synchronized with some 
external system (

import { useEffect } from 'react';

useEffect(() => {
  // Effetto collaterale qui
}, [dipendenze]);

Nota: Array delle dipendenze:
[], [dipendenze]
[]: Se lasci l'array delle dipendenze vuoto, l'effetto viene eseguito solo una volta dopo il montaggio iniziale del componente.

[dipendenze]: L'effetto viene eseguito ogni volta che una delle dipendenze cambia.


*/

import { useState } from "react";
import { useEffect } from "react";

function Example(cities) {
    const [count, setCount] = useState(0);

    /* By doing this the count and the title are not synchronized, I need 
    to use useEffect  */
    /* 
        function handleClick() {
            setCount(count + 1);
            document.title = `Conteggio: ${count}`;
        };
     */



    /* With useEffect */

    function handleClick() {
        setCount(count + 1);
    };


    useEffect(() => {
        document.title = `Conteggio: ${count}`;
        console.log('Ciao da useEffect');
    }, [count]);

    return (
        <div>
            <p>Conteggio: {count}</p>
            <button onClick={handleClick}>Increase</button>
        </div>
    )
}

export default Example