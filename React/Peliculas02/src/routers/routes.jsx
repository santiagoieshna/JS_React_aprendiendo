import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { MovieDetails } from "../pages/MovieDetails";
function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/movies/:movieId" element={<MovieDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export {MyRoutes};
