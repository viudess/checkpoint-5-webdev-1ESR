'use client';
export const dynamic = 'force-dynamic';

import { Suspense } from 'react';
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import apiClient from '@/lib/apiClient';
import MovieList from '@/components/MovieList';
import Loader from '@/components/Loader';
import ErrorState from '@/components/ErrorState';
import SearchBar from '@/components/SearchBar';
import Filters from '@/components/Filters';

function SearchContent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('popularity');

  const router = useRouter();
  const searchParams = useSearchParams();

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const fetchMovies = useCallback(async (searchQuery) => {
    if (!searchQuery || searchQuery.trim() === '') {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.get('/search/movie', {
        params: { query: searchQuery },
      });
      setResults(response.data.results);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const urlQuery = searchParams?.get('q');
    if (urlQuery) {
      setQuery(urlQuery);
      fetchMovies(urlQuery);
    }
  }, [searchParams, fetchMovies]);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?q=${query}`);
    fetchMovies(query);
  };

  const sortedResults = useMemo(() => {
    const newResults = [...results];
    if (sortBy === 'popularity') return newResults.sort((a, b) => b.popularity - a.popularity);
    if (sortBy === 'release_date')
      return newResults.sort((a, b) => new Date(b.release_date || 0) - new Date(a.release_date || 0));
    if (sortBy === 'vote_average') return newResults.sort((a, b) => b.vote_average - a.vote_average);
    return newResults;
  }, [results, sortBy]);

  return (
    <div className="search-container">
      <h1>Buscar Filmes</h1>
      <SearchBar query={query} setQuery={setQuery} onSubmit={handleSubmit} inputRef={inputRef} />

      {loading && <Loader />}
      {error && <ErrorState message={error} />}

      {!loading && !error && results.length > 0 && (
        <>
          <Filters sortBy={sortBy} setSortBy={setSortBy} />
          <MovieList movies={sortedResults} />
        </>
      )}

      {!loading && !error && results.length === 0 && query && (
        <p>Nenhum resultado encontrado para `{query}`.</p>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<Loader />}>
      <SearchContent />
    </Suspense>
  );
}
