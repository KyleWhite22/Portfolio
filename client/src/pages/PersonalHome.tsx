import Movies from "../components/Movies";
import VideoGames from "../components/VideoGames";

export default function PersonalHome() {
  return (
    <div className="w-full">
          <Movies /> 
          <VideoGames />
    </div>
  );
}