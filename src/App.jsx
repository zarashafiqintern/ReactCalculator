import { useState } from 'react';
import React from 'react';
import * as math from "mathjs";
import "./App.css";

function App() { 
  const[value, setValue] = useState("");
  console.log(value); 
  const numbers = [
    1, 2,3,4,5,6,7,8,9,0,"+","-","*","/","cos(","sin(","tan(", "(", ")","^",];
  return (
    <>
      <section className='section'>
        <div>
          <input 
          id="display" 
          type="text"
          onChange={(e)=> setValue(e.target.value)}
          value={value} />
        </div>
          {numbers.map((e) => {
            return <button onClick={() => setValue(value + e)}>{e}</button>;
          })}
        <div className="button">  
          <button className="control" onClick={()=>setValue("")}>AC</button>
          <button className="control"onClick={()=>setValue(value.slice(0,-1))}>Del</button>
             <button className="equal"
            onClick={() => {
              try {
                const result = math.evaluate(value);
                if (isNaN(result) || !isFinite(result)) {
                  setValue("Error");
                } else {
                  setValue(result);
                }
              } catch {
                setValue("Error");
              }
            }}
          >
            =
          </button>
</div>
  </section>
    </>
  )
}
export default App;