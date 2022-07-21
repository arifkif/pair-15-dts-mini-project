import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { API_KEY, BASE_IMG_URL, urlRequest } from "../config/config";
import "../components/Hero/hero.css";
const MovieDetail = () => {
  const location = useLocation();
  // console.log(location);
  const id = location.pathname.split("/")[1];
  console.log(id);
  const [movie, setMovie] = useState([]);
  const [cast, setCast] = useState([]);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await urlRequest.get(`3/movie/${id}?api_key=${API_KEY}`);
        setMovie(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    const getCast = async () => {
      try {
        const res = await urlRequest.get(`3/movie/${id}/credits?api_key=${API_KEY}`);
        setCast(res.data.cast);
        console.log(res.data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    const getVideos = async () => {
      try {
        const res = await urlRequest.get(`3/movie/${id}/videos?api_key=${API_KEY}`);
        setVideos(res.data.results);
        console.log(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
    getCast();
    getVideos();
  }, [id]);
  return (
    <>
      <div className="mb-3">
        <div
          className="item"
          style={{ backgroundImage: `url(${BASE_IMG_URL}original/${movie.backdrop_path})` }}
        >
          <div className="content">
            <div className="">
              <img src={`${BASE_IMG_URL}w500/${movie.poster_path}`} alt="" />
            </div>
            <div className="info">
              <h1 className="text-[5rem] font-bold text-white text-left mb-[3rem] leading-none">
                {movie.title}
              </h1>
              <div className="text-left pb-5">
                {movie.genres?.map((genre) => (
                  <button
                    key={genre.id}
                    className="cursor-auto rounded-full bg-[#141414] text-white py-2 px-5 mx-1"
                  >
                    {genre.name}
                  </button>
                ))}
              </div>
              <div className="font-bold text-white text-left mb-[2rem]">{movie.overview}</div>
              <div className="hidden sm:block">
                <h2 className="text-white text-3xl font-bold text-left mb-3">CAST</h2>
                <div className="flex gap-5">
                  {cast?.slice(0, 3).map((cast) => (
                    <img
                      key={cast.id}
                      className="w-[100px]"
                      src={`${BASE_IMG_URL}w500/${cast.profile_path}`}
                      alt="cast"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full h-full">
        {videos?.map((video) => {
          if (video.type === "Trailer") {
            return (
              <div className="py-5">
                <div className="pb-2">
                  <h2 className="text-white text-3xl">{video.name}</h2>
                </div>
                <iframe
                  src={`https://www.youtube.com/embed/${video.key}`}
                  width="100%"
                  height="700px"
                  title="video"
                ></iframe>
              </div>
            );
          }
        })}
      </section>
    </>
  );
};

export default MovieDetail;
