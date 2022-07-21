import React from "react";
import { NavLink } from "react-router-dom";
import { OutlineButton } from "../components/Button/Button";
import Hero from "../components/Hero/Hero";
import MovieList from "../components/MovieList";

const Home = () => {
  const popularMovies = "3/movie/popular";
  const moviesTopRated = "3/movie/top_rated";
  const tvTopRated = "3/movie/upcoming";

  return (
    <div className="">
      <Hero />
      <div>
        <div className="mb-[5rem]">
          <div className="mb-2 flex justify-between px-5">
            <h2 className="text-white text-xl">Popular Movies</h2>
            <NavLink to="/">
              <OutlineButton className="small">View more</OutlineButton>
            </NavLink>
          </div>
          <MovieList type={popularMovies} />
        </div>
        <div className="mb-[5rem]">
          <div className="mb-2 flex justify-between px-5">
            <h2 className="text-white text-xl">Top Rated Movies</h2>
            <NavLink to="/">
              <OutlineButton className="small">View more</OutlineButton>
            </NavLink>
          </div>
          <MovieList type={moviesTopRated} />
        </div>
        <div className="mb-[5rem]">
          <div className="mb-2 flex justify-between px-5">
            <h2 className="text-white text-xl">Upcoming Movies</h2>
            <NavLink to="/">
              <OutlineButton className="small">View more</OutlineButton>
            </NavLink>
          </div>
          <MovieList type={tvTopRated} />
        </div>
      </div>
    </div>
  );
};

export default Home;
