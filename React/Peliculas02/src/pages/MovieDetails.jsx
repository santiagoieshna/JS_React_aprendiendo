import './MovieDetails.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../data/httpClient';
import { getMovieImg } from '../utils/getMovieImg';

function MovieDetails(){
    // Cogemos la id por los parametros
    const {movieId} = useParams();
    // Declaramos el estado de movie-> iniciado Array vacio [] (no tendra nada hasta que no carguemos data)
    const [movie, setMovie]= useState([]);
    // Declaramos el estado de generos (atributo de movie)
    const [generos, setGeneros] = useState([]);
    // Establecemos el estado
    useEffect(()=>{
        get("/movie/"+movieId).then((data)=>{

            setMovie(data);
            // poner setGeneros(movie.genres) dara undefined
            // porque aqui aun se estblecio movie
            setGeneros(data.genres);
        });
    },[movieId]);
    // Esta ultima parte no la entiendo
    // Porque entre [movieId]¿? -> Indica que nuestro efecto depende del valor movieId
    
    console.log(movie);
   
    const imageUrl = getMovieImg(movie.poster_path, 500)

    return(
        <section className="moviedetails">
            <img src={imageUrl} alt={movie.title} />
            <div>
                <p><strong>Title : </strong>
                {movie.title}
                </p>
                <div className='generos'>
                    <h4>Generos: </h4>
                {
                    generos.map((genero)=>(
                        <p key={genero.id}>{genero.name}</p>
                    ))
                }
                </div>
                {/* DESCRIPCION */}
                <div className="descripcion">
                    <h4>Descripción</h4>
                    {movie.overview}
                </div>
            </div>
        </section>
    );
}
export {MovieDetails};