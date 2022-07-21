import React, { useEffect, useState } from "react";
import { API_KEY, urlRequest } from "../config/config";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await urlRequest.get(`${props.type}?api_key=${API_KEY}`);
        setItems(res.data.results.slice(1, 7));
        console.log(res.data.results.slice(1, 7));
      } catch (error) {
        console.log(error);
      }
    };
    getItems();
  }, [props.type]);
  return (
    <div className="md:flex justify-between">
      {items.map((item, i) => (
        <MovieCard
          key={i}
          id={item.id}
          title={item.title}
          name={item.name}
          image={item.poster_path}
        />
      ))}
    </div>
  );
};

export default MovieList;
