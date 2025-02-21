import React, {useState,useEffect} from "react";

export default function Login(){
    const [message, setMessage] = useState("");

    useEffect(() => {
      fetch("https://mybackend-peach.vercel.app/api/login")
        .then((res) => res.json())
        .then((data) => setMessage(data.password))
        .catch((err) => console.error(err));
    }, []);
    return(
        <div>
        <h1>React + Express Full Stack App</h1>
        <p>{message}</p>
      </div>
    )
}