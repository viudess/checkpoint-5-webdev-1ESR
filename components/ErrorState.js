export default function ErrorState({ message }) {
  return (
    <div className="error-state">
      <p>Ocorreu um erro:</p>
      <p>{message || 'Não foi possível carregar os dados.'}</p>
    </div>
  );
}