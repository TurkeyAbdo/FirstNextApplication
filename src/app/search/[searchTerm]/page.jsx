import Results from '@/components/Results';
import React from 'react'

const SearchPage  = async ({params}) => {
    const movieName = params.searchTerm
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${movieName}&language=en-US&page=1&include_adult=false`)

    const data = await res.json();
    const results = data.results
    return (
        <div>
            {
                results && results.length ===  (
                    <h1>No movie found with this name</h1>
                )
            }
            {
                results && <Results results={results}/>
            }
        </div>
  )
}

export default SearchPage