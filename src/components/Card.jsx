import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaRegThumbsUp } from "react-icons/fa";

const Card = ({movie}) => {
  return (
    <div className='sm:border sm:border-gray-300 sm:rounded-xl '>
        <Link href={`movie/${movie.id}`}>
            <Image 
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path||movie.poster_path}`}
                alt='Movie image' 
                width={500}
                height={300}
                className='sm:rounded-t-lg hover:opacity-75 transition-opacity duration-300'
            />
            <div className='p-2 '>
            <p className='font-semibold truncate'>{movie.title || movie.name}</p>
            <p className='line-clamp-2'>{movie.overview}</p>
            <div className='flex justify-between w-full mt-4'>
            <p className='font-semibold'>Rating: {movie.vote_average}</p>
            <div className='flex items-center'>
                <FaRegThumbsUp />
                <p className='ml-2'>
                    {movie.vote_count}
                </p>
            </div>
            </div>
            </div>
        </Link>
    </div>
  )
}

export default Card