import './MovieDetails.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../data/httpClient';
import { getMovieImg } from '../utils/getMovieImg';

function MovieDetails(){
    const {movieId} = useParams;
    console.log(movieId)
    const [movie, setMovie]= useState(null);
    useEffect(()=>{
        get("/movie/"+movieId).then((data)=>{
            setMovie(data);
        });
    },[movieId]);
    // Esta ultima parte no la entiendo
    // Porque entre [movieId]¿?
    const imageUrl = getMovieImg(movie.poster_path, 500)

    return(
        <section className="moviedetails">
            <img src={imageUrl} alt={movie.title} />
        </section>
    );
}
export {MovieDetails};