import React, { useState, useEffect } from "react";
import "../banner/banner.css"
import axios from "../../utils/axios";
import requests from "../../utils/request";
const Banner = () => {
	const [movie, setMovie] = useState([]);
    useEffect(() => {
  async function fetchData() {
    const request = await axios.get(requests.fetchNetflixOriginals);

    if (request.data && request.data.results && request.data.results.length > 0) {
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    } else {
      console.error("No results found in API response:", request.data);
    }

    return request;
  }
  fetchData();
}, []);
	
	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + '...' : str;
	}
	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
				backgroundPosition: "center",
			}}
		>
			<div className="banner__contents">
				<h1 className="banner__title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__description">{truncate(movie?.overview,150)}</h1>
			</div>
			<div className="banner__fadeBottom" />
		</header>
	);
};

export default Banner;