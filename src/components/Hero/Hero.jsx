import React, { useEffect, useState } from "react";
import { API_KEY, BASE_IMG_URL, urlRequest } from "../../config/config";
import { OutlineButton } from "../Button/Button";
import { NavLink } from "react-router-dom";
import "./hero.css";

const Hero = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await urlRequest.get(
          `3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`
        );
        setMovies(res.data.results.slice(0, 1));
        // console.log(res.data.results.slice(0, 1));
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);
  return (
    <>
      <div className="hero-slide">
        {movies?.map((movie) => (
          <div
            key={movie.id}
            className="item"
            style={{
              backgroundImage: `url(${BASE_IMG_URL}original/${movie.backdrop_path})`,
            }}
          >
            <div className="content">
              <div className="info">
                <h3 className="text-[1.5rem] font-bold text-white text-left mb-[2rem]">
                  Top Trending Movie
                </h3>
                <h1 className="text-[5rem] font-bold text-white text-left my-[3rem] leading-none">
                  {movie.title}
                </h1>
                <div className="font-bold text-white text-left mb-[2rem]">
                  {movie.overview}
                </div>
                <div className="text-left flex gap-5">
                  <NavLink to={`/${movie.id}`}>
                    <OutlineButton>Watch trailer</OutlineButton>
                  </NavLink>
                </div>
              </div>
              <div className="poster">
                <img src={`${BASE_IMG_URL}w500/${movie.poster_path}`} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
