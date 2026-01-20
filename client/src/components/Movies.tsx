//src/components/Movies.tsx
import goodfellasPoster from "../assets/movies/goodfellas.jpg";
import lebowksiPoster from "../assets/movies/lebowski.jpg";
import bladeRunnerPoster from "../assets/movies/bladerunner.jpg";
import whiplashPoster from "../assets/movies/whiplash.jpg";
import se7enPoster from "../assets/movies/se7en.jpg";
import casinoPoster from "../assets/movies/casino.jpg";
import thingPoster from "../assets/movies/thing.jpg";
import batmanPoster from "../assets/movies/batman.jpg";
import laconfidentialPoster from "../assets/movies/laconfidential.jpg";
import interstellarPoster from "../assets/movies/interstellar.jpg";

    type MovieItem = {
        title: string;
        poster: string;
    }
    export default function Movies() {
        const movieList: MovieItem[] = [
            {
                title: "Goodfellas (1990)",
                poster: goodfellasPoster
            },
            {
                title: "Big Lebowski (1998)",
                poster: lebowksiPoster
            },
             {
                title: "Blade Runner 2049 (2017)",
                poster: bladeRunnerPoster
            },
            {
                title: "Whiplash (2014)",
                poster: whiplashPoster
            },
             {
                title: "Casino (1995)",
                poster: casinoPoster
            },
              {
                title: "Interstellar (2014)",
                poster: interstellarPoster
            },
        
            {
                title: "Se7en (1995)",
                poster: se7enPoster
            },
               {
                title: "The Thing (1982)",
                poster: thingPoster
            },
             {
                title: "L.A. Confidential (1997)",
                poster: laconfidentialPoster
            },
             {
                title: "The Batman (2022)",
                poster: batmanPoster
            },
        ];
        return (
            <section
                id="movies"
                aria-labelledby="movies-heading"
                // Distinct background vs Work/Education
                className="bg-zinc-800 text-white px-4 md:px-8 py-10 md:py-14 scroll-mt-24 border-t border-white/10"
            >
                <h1 className="text-center text-5xl font-bold mt-8"
                >
                    Kyle's Top 10 Movies
                </h1>
           <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
  {movieList.map((movie) => (
    <div key={movie.title} className="flex flex-col items-center">
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-40"
      />
      <p className="mt-2">{movie.title}</p>
    </div>
  ))}
</div>
           
            </section>
        );
    }