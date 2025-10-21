export default function Filters({ sortBy, setSortBy }) {
  return (
    <div className="filters">
      <label htmlFor="sort">Ordenar por: </label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="popularity">Popularidade</option>
        <option value="release_date">Data de Lançamento</option>
        <option value="vote_average">Nota</option>
      </select>
    </div>
  );
}