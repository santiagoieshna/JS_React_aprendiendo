import './ContextMovieCard.css'
import { useEffect, useState } from 'react';
import { get } from '../data/httpClient';
import { MovieCard } from './MovieCard.jsx';

function ContextMovieCard(props){
    // Creamos estado
    const [movies, SetMovies] = useState([]);
    // Marcamos como se comportara el estado
    useEffect(() => {
        get("/discover/movie").then((data) => {
            SetMovies(data.results);
            // console.log(data);
        })
    },[]);

    return(
        <ul className="contextmoviecard">
            {movies.map((movie)=>(
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </ul>
    );
}
export {ContextMovieCard};