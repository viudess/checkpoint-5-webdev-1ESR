export default function SearchBar({
  query,
  setQuery,
  onSubmit,
  inputRef, 
}) {
  return (
    <form onSubmit={onSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Buscar por um filme..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputRef} 
      />
      <button type="submit">Buscar</button>
    </form>
  );
}