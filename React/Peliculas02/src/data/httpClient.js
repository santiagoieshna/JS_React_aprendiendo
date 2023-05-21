
const API = "https://api.themoviedb.org/3";
// const API = "https://api.themoviedb.org/3";
function get(path){
    return fetch(API+path,{
        headers:{
            Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWZhMTQzOTJlZjVhYmU0ZDFiZGQ4OGQ4ZGE4ODg2OCIsInN1YiI6IjY0NjkwYWM5YTUwNDZlMDBlNWI2NDdkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MYPa2l07jhM-kpL6VeA_WTiVhyp45B11-0bOcdPgf4A",
            "Content-Type":"application/json;charset=utf-8"
        }
    }).then((result)=>result.json());

}

export {get}