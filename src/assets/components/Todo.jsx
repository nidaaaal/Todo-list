import React, { Fragment, useEffect, useState } from "react";



function prevent(event){
    event.preventDefault();
}

export default function Todo(){
    const[text,settext]=useState("")
    const[texts,settexts]=useState([])

    
   function addtask(){
    if (text.trim() === "") return;
    settexts([...texts,text])
    settext("")

   }

   const taskdel = (i)=>{
    settexts(texts.filter((_,j)=>i !== j))
}

    

return(
    <div >
            <input type="text" value={text} onChange={(e)=>settext(e.target.value)}/>
             <button type="submit" onClick={addtask}>ADD</button>
            <ul>
                {texts.map((x,i)=>(
    
                    <li key={i}>{x}
                <button onClick={()=>taskdel(i)}>delete</button>
            </li>
            
  
                ))}
             </ul>

    </div>
)
}
