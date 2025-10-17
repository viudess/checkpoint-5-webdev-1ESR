import Link from "next/link";
import Image from "next/image";

const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL;

export default function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? `${IMG_URL}${movie.poster_path}`
    : "/assets/placeholder.png";

  return (
    <Link href={`/movie/${movie.id}`} className="movie-card">
      <div className="movie-card-info">
        <Image
          src={imageUrl}
          alt={movie.title}
          width={342} 
          height={513} 
          style={{ width: "100%", height: "auto" }} 
        />
        <h3>{movie.title}</h3>
        <p>Lançamento: {movie.release_date || "N/A"}</p>
        <p>Nota: {movie.vote_average?.toFixed(1) || "N/A"}</p>
      </div>
    </Link>
  );
}
