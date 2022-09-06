// import React, { useCallback, useEffect, useState } from 'react';
// import MoviesList from './components/MoviesList';
// import './App.css';
// import AddMovie from './components/AddMovie';

// function App() {
//   const [movies, setMovies] = useState([])
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState(null)

//   const fetchMoviesHanlder = useCallback(async () => {
//     setIsLoading(true)

//     try {
//       const response = await fetch('https://add-movie-11955-default-rtdb.europe-west1.firebasedatabase.app/movies.json')

//       if(!response.ok){
//         throw new Error('Something went wrong!')
//       }

//       const data = await response.json()
//       console.log(data);
//       const loadedMovies = []
//       for(let key in data) {
//         loadedMovies.push({
//           id: key,
//           title: data[key].title,
//           openingText: data[key].openingText,
//           releaseDate: data[key].releaseDate,
//         })
//       }

//       // const transformedMovies = data.results.map((movieData) => {
//       //   return {
//       //     id: movieData.episode_id,
//       //     title: movieData.title,
//       //     openingText: movieData.opening_crawl,
//       //     releaseDate: movieData.release_date,
//       //   }
//       // })

//       setMovies(loadedMovies)
      
//     } catch (error) {
//       setError(error.message)
//     }
//     setIsLoading(false)
//   }, [])
      

//   let content = <p>No movies found!</p>

//   if(movies.length > 0){
//     content = <MoviesList movies={movies}/>
//   }
//   if(error){
//     content = <p>{error}</p>
//   }
//   if(isLoading){
//     content = <p>Loading...</p>
//   }

//   useEffect(() => {
//     fetchMoviesHanlder()
//   }, [])

//   async function addMovieHandler(movie) {
//     const response = await fetch (
//       'https://add-movie-11955-default-rtdb.europe-west1.firebasedatabase.app/movies.json',
//     { method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.strinify(movie),
//     }
//   )

//   const data = await response.json()
//   console.log(data);
  
//   }

//   return (
//     <React.Fragment>
//       <section>
//         <AddMovie onAddMovie={addMovieHandler}/>
//       </section>
//       <section>
//         <button onClick={fetchMoviesHanlder}>Fetch Movies</button>
//       </section>
//       <section>{content}</section>
//     </React.Fragment>
//   );
// }

// export default App;
