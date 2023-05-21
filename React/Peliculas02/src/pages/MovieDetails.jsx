import './MovieDetails.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../data/httpClient';
import { getMovieImg } from '../utils/getMovieImg';

function MovieDetails(){
    // Cogemos la id por los parametros
    const {movieId} = useParams();
    // Declaramos un estado -> iniciado Array vacio [] (no tendra nada hasta que no carguemos data)
    const [movie, setMovie]= useState([]);
    // Establecemos el estado
    useEffect(()=>{
        get("/movie/"+movieId).then((data)=>{
            setMovie(data);
        });
    },[movieId]);
    // Esta ultima parte no la entiendo
    // Porque entre [movieId]¿? -> Indica que nuestro efecto depende del valor movieId

   
    const imageUrl = getMovieImg(movie.poster_path, 500)

    return(
        <section className="moviedetails">
            <img src={imageUrl} alt={movie.title} />
        </section>
    );
}
export {MovieDetails};