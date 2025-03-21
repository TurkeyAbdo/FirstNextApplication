import Card from "./Card";

function Results({results}) {
    return ( 
    <div className="grid sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4 sm:gap-2">
        {results.map((movie) => (
            <Card movie={movie} key={movie.id}/>
        ))}
    </div>
);
}

export default Results;