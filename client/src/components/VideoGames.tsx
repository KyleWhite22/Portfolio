//src/components/VideoGames.tsx
import doomEternalCover from "../assets/games/doomEternal.png";
import botwCover from "../assets/games/botw.jpg";
import odysseyCover from "../assets/games/marioOdyssey.jpg";
import heartGoldCover from "../assets/games/heartGold.jpg";
import marioKartCover from "../assets/games/marioKart.jpeg";
import redDead2Cover from "../assets/games/redDead2.jpg";
import smashBrosCover from "../assets/games/smashBros.jpg";
import windWakerCover from "../assets/games/windWaker.jpg";
import haloCover from "../assets/games/halo.png";
import battlefrontCover from "../assets/games/battlefront.jpg";

    type Game= {
        title: string;
        cover: string;
    }
    export default function VideoGames() {
        const gameList: Game[] = [
            {
                title: "TLOZ Breath of the Wild (2017)",
                cover: botwCover
            },
             {
                title: "Red Dead Redemption II (2018)",
                cover: redDead2Cover
            },
            {
                title: "Pokémon HeartGold (2009)",
                cover: heartGoldCover
            },
            {
                title: "Super Mario Odyssey (2017)",
                cover: odysseyCover
            },
             {
                title: "Halo Reach (2010)",
                cover: haloCover
            },

            {
                title: "Super Smash Bros. Ultimate (2018)",
                cover: smashBrosCover
            },
             {
                title: "TLOZ Wind Waker (2002)",
                cover: windWakerCover
            },
            {
                title: "Star Wars Battlefront (2004)",
                cover: battlefrontCover
            },
            {
                title: "Doom Eternal (2020)",
                cover: doomEternalCover
            },
              {
                title: "Mario Kart 8 Deluxe (2017)",
                cover: marioKartCover
            },
            
            
        ];
        return (
            <section
                id="videogames"
                aria-labelledby="games-heading"
                // Distinct background vs Work/Education
                className="bg-zinc-800 text-white px-4 md:px-8 py-10 md:py-14 scroll-mt-24 border-t border-white/10"
            >
                <h1 className="text-center text-5xl font-bold mt-8"
                >
                    Kyle's Top 10 Video Games
                </h1>
           <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
  {gameList.map((game) => (
    <div key={game.title} className="flex flex-col items-center">
        <img
        src={game.cover}
        alt={game.title}
        className="w-40"
      />
      <p className="mt-2">{game.title}</p>
    </div>
  ))}
</div>
           
            </section>
        );
    }