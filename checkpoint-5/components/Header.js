import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <Link href="/" className="header-logo">
          NextMovies
        </Link>
        <div className="header-links">
          <Link href="/">Home</Link>
          <Link href="/search">Buscar</Link>
        </div>
      </nav>
    </header>
  );
}