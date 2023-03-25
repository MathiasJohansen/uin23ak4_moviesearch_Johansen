import { useEffect, useState } from "react"
import Moviecard from "./Moviecard"

export default function Main(){
    const [movies, setMovies] = useState([])
    const [resultat, setResultat] = useState([])
    
    const getMovies = async() => {
        const response = await fetch ('http://www.omdbapi.com/?i=tt3896198&apikey=4ffa912&s=james-bond')
        const data = await response.json()
        setMovies(data.articles)
    }
    console.log(movies?.search?.title)
    
    useEffect(() =>{
        getMovies()
    },[])
    return(
        <>
        <h2>Her kommer filmer</h2>
            {movies?.map((movie, index) =>(
                <Moviecard key={index} title={movie?.search?.title} img={movie?.search?.poster}/>
            ))}

        </>
    )
}