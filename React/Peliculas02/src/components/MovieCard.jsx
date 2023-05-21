import "./MovieCard.css";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  // const imageUrl = "https://image.tmdb.org/t/p/w300/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg";

  return (
    <li className="moviecard">
      <Link to={"/movies/"+movie.id} className="linkMovie">
        <img src={imageUrl} alt={movie.title} className="portada" />
      </Link>
      <h1 className="titleMovie">{movie.title}</h1>
    </li>
  );
}
export { MovieCard };
