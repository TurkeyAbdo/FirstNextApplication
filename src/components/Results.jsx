function Results({results}) {
    return ( 
    <div>
        <ul>
        {results.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title || movie.name}</h2>
            <p>Rating: {movie.vote_average}</p>
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
);
}

export default Results;