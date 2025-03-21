import Image from 'next/image';
import React from 'react'

async function MoviePage({params}) {
    const movieID = params.id
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.API_KEY}`)

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    const movie = await res.json()
    console.log(movie)

    return (
    <div className='flex flex-col md:flex-row max-w-6xl mx-auto p-4 md:p-8'>
        <Image 
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path||movie.poster_path}`}            
            width={500}
            height={500}
            alt='movie image'
            style={{maxWidth: '100%', minHeight: '100%'}}
        />
        <div className='p-2'>
            <h1 className='font-bold mb-4 text-2xl'>{movie.original_title}</h1>
            <p className=''>{movie.overview}</p>
            <p className='font-bold'>Release Date: {new Date(movie.release_date).toLocaleDateString()}</p>
            <p className='font-bold'>Popularity: {movie.popularity}</p>
            <p className='font-bold'>Vote Average: {movie.vote_average}</p>
        </div>
    </div>
  )
}

export default MoviePage