'use client';

import { useState, useEffect } from 'react';
import apiClient from '@/lib/apiClient';
import MovieList from '@/components/MovieList';
import Loader from '@/components/Loader';
import ErrorState from '@/components/ErrorState';
import { useLocalStorage } from '@/hooks/useLocalStorage'; 

export default function HomePage() {

  const [movies, setMovies] = useLocalStorage('popularMovies', []); 
  
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await apiClient.get('/movie/popular');
        setMovies(response.data.results);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (movies.length === 0) {
      fetchPopularMovies();
    } else {
      setLoading(false); 
    }
  }, []); 

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  return (
    <div>
      <h1>Filmes Populares (Cache Ativo)</h1>
      <MovieList movies={movies} />
    </div>
  );
}