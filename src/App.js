import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
//f847290a

const API_URL = 'http://www.omdbapi.com?apikey=f847290a';

const movie1 = {
	Title: 'Amazing Spiderman Syndrome',
	Type: 'movie',
	Year: '2012',
	imdbID: 'tt2586634',
	Poster: 'N/A',
};
const App = () => {
	const [movies, setMovies] = useState();
	const [searchTerm, setSearchTerm] = useState('');

	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();

		setMovies(data.Search);
	};

	useEffect(() => {
		searchMovies(`Spiderman`);
	}, []);
	return (
		<div className='app'>
			<h1>MovieLand</h1>
			<div className='search'>
				<input
					placeholder='Search for movies'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<img
					src={SearchIcon}
					alt='search'
					onClick={() => searchMovies(searchTerm)}
				/>
			</div>

			{movies?.length > 0 ? (
				<div className='container'>
					{movies.map((movie) => (
						<MovieCard movie={movie}></MovieCard>
					))}
					<MovieCard movie={movies[0]} />
				</div>
			) : (
				<div className='empty'>
					<h2>No movies found</h2>
				</div>
			)}
		</div>
	);
};

export default App;
