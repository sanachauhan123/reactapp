import React,{useState,useEffect} from "react";

export default function Home(){
     const [message, setMessage] = useState("");
    
        useEffect(() => {
          fetch("https://backend-eta-peach.vercel.app/api", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
          })
            .then(response => response.json())
            .then(data => setMessage(data))
            .catch(error => console.error("Error:", error));
        }, []);
    return(
<div>
        <h1>React + Express Full Stack App</h1>
        <p>{message}</p>
      </div>
    )
}