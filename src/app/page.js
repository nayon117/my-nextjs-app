"use client";
import { useState } from "react";

const HomePage = () => {
  const [counter,setCounter] = useState(0);
  return(
    <div>
       <p> This is Next app </p>
       <h3>Counter:{counter}</h3>
       <button className="btn bg-blue-600 px-2 py-1" onClick={()=>setCounter(counter+1)}>Increase</button>
       <button className="btn bg-blue-600 px-2 py-1" onClick={()=>setCounter(counter-1)}>Decrease</button>
    </div>
  )
}
export default HomePage;