'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; 
import apiClient from '@/lib/apiClient';
import Loader from '@/components/Loader';
import ErrorState from '@/components/ErrorState';
import Image from 'next/image';

const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL;

export default function MovieDetailPage() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return; 

    const fetchMovie = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await apiClient.get(`/movie/${id}`);
        setMovie(response.data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]); 

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  if (!movie) {
    return <p>Filme não encontrado.</p>;
  }
  
  const imageUrl = movie.poster_path
    ? `${IMG_URL}${movie.poster_path}`
    : '/assets/placeholder.png';

  return (
    <div className="movie-detail">
      <div className="movie-detail-poster">
        <Image
          src={imageUrl}
          alt={movie.title}
          width={342}
          height={513}
        />
      </div>
      <div className="movie-detail-info">
        <h1>{movie.title}</h1>
        {movie.tagline && <p className="tagline">`{movie.tagline}`</p>}
        <div className="movie-detail-meta">
          <span>
            <strong>Lançamento:</strong> {movie.release_date}
          </span>
          <span>
            <strong>Nota:</strong> {movie.vote_average?.toFixed(1)} / 10
          </span>
          <span>
            <strong>Duração:</strong> {movie.runtime} min
          </span>
        </div>
        <h2>Sinopse</h2>
        <p className="overview">{movie.overview || 'Sinopse não disponível.'}</p>
      </div>
    </div>
  );
}