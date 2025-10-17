import './globals.css';
import Header from '@/components/Header'; 

export const metadata = {
  title: 'Next.js Movie Catalog',
  description: 'Um catálogo de filmes com Next.js e TMDB API',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}