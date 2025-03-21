import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  // Use nullish coalescing operator to set default genre
  const genre = searchParams.genre ?? "fetchTrending";

  // Fetch data from the API
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1` ,
    {next:{revalidate:10000}}
  );

  // Check if the response is ok
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const results = data.results;

  console.log(results);

  return (
    <div>
      {/* <h1>Home</h1> */}

      <Results results={results} />
    </div>
  );
}