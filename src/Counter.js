import { useState } from 'react'
function Counter(){

    const [count,setcount] = useState(0)

    function HandleAddCouter(){
    setcount(count + 1)
    }
    
    function HandleSubtractCouter(){
        setcount(count - 1)
    }

    function HandleResetCouter(){
        setcount(0)
    }

    return <div>
        <h1>Counter : {count} </h1>
        <button onClick = {HandleAddCouter}>ADD</button>
        <button onClick = {HandleSubtractCouter}>SUBTRACT</button>
        <button onClick = {HandleResetCouter}>RESET</button>
    </div>
}

export default Counter