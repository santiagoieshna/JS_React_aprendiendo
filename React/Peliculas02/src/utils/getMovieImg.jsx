import placeholder from '../img/placeholder.png'
function getMovieImg(path,width){
    
    return path ? `https://image.tmdb.org/t/p/w${width}${path}`: placeholder;
}
export {getMovieImg};