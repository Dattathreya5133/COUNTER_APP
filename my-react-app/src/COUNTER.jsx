import React,{useState} from "react"

function COUNTER (){
    const[count,setCount]=useState(0);

    function  inc(){
        setCount(count+1);
    }

    function dec(){
        setCount(count-1);
    }

    function reset(){
        setCount(0);
    }


    return(<div className="counter-container">
        <h1 className="count-display">{count}</h1>
        <button className="counter-button" onClick={dec}>DECREMENT</button>
        <button className="counter-button" onClick={reset}>RESET</button>
        <button className="counter-button" onClick={inc}>INCREMENT</button>
    </div>);
}

export default COUNTER