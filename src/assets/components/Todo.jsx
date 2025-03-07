import React, { Fragment, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


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
          <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand><h2>TODO-LIST APP</h2></Navbar.Brand>
        </Container>
        </Navbar>
            <input type="text" value={text} onChange={(e)=>settext(e.target.value)} placeholder="enter your text"/>
            <Button variant="success" size="sm"  onClick={addtask} style={{backgroundColor:"green",marginLeft:"10px"}}>ADD</Button>             
            <ul>
                {texts.map((x,i)=>(
    
                    <li key={i}>{x}<span></span>
                <Button size="sm" variant="danger" onClick={()=>taskdel(i)}  style={{backgroundColor:"red",marginLeft:"10px"}}> DELETE </Button>
            </li>
            
  
                ))}
             </ul>

    </div>)}
