#Questao1
Correto  
Nota: 1,00  

#Questao2  
Correto  
Nota: 1,00  

#Questao3  
Correto  
Nota: 1,00  

#Questao4  
Correto  
Nota: 1,00  

#Questao5  
Correto  
Nota: 1,00  

#Questao6  
Correto  
Nota: 1,00  

#Questao7  
Correto  
Nota: 1,00  

#Questao8  
Correto  
Nota: 1,00  

#Questao9  
Correto  
Nota: 1,00  

#Questao10  
Correto  
Nota: 1,00  

#PontoExtra1  
Incorreto  
Nota: 0,00  

#PontoExtra2  
Correto  
Nota: 1,00  

#PontoExtra3  
Correto  
Nota: 1,00  

#PontoExtra4  
Incorreto  
Nota: 0,00  

**Total parcial (antes dos extras): 10,00**  
**Total após pontos extras (limitado a 10,00): 10,00**  
**Pontos extras excedentes (não aplicados): 2,00**

## Explicação da Correção

Questão 1: O projeto possui 9 commits na branch principal, superando o mínimo de 8. As mensagens são coerentes e descritivas, mostrando evolução do projeto desde o commit inicial até as correções finais.

Questão 2: O projeto possui 7 componentes funcionais bem estruturados: ErrorState, Filters, Header, Loader, MovieCard, MovieList e SearchBar. Todos são reutilizáveis e seguem boas práticas de componentização.

Questão 3: O projeto foi criado com create-next-app (evidenciado pelo package.json) e utiliza corretamente o Next.js Router com Link e useRouter para navegação entre páginas.

Questão 4: O projeto utiliza axios corretamente através do apiClient.js configurado com baseURL e parâmetros da API TMDB, com integração adequada em todas as páginas.

Questão 5: O projeto utiliza useState e useEffect adequadamente em todas as páginas principais (HomePage, MovieDetailPage, SearchPage) para gerenciamento de estado e efeitos colaterais.

Questão 6: O projeto utiliza useMemo, useCallback e useRef corretamente na página de busca (/search) para otimização de performance e referências de elementos.

Questão 7: A passagem de props está implementada corretamente entre componentes, como MovieCard recebendo movie, SearchBar recebendo query/setQuery, e Filters recebendo sortBy/setSortBy.

Questão 8: O projeto possui as páginas obrigatórias: / (lista de filmes populares) e /movie/[id] (detalhes do filme), ambas funcionais e bem estruturadas.

Questão 9: O README possui instruções básicas de instalação e execução, além de um link funcional para o deploy na Vercel.

Questão 10: O deploy na Vercel está funcional, conforme verificado através do teste HTTP que retornou status 200.

Ponto Extra 1: Não foi encontrada implementação de chamada POST funcional relacionada ao GET. O projeto utiliza apenas chamadas GET para buscar filmes.

Ponto Extra 2: O projeto implementa busca por texto funcional na página /search com SearchBar component e integração com API de busca do TMDB.

Ponto Extra 3: O projeto implementa cache offline com localStorage através do hook useLocalStorage e arquivo cache.js, utilizado na página principal para armazenar filmes populares.

Ponto Extra 4: O projeto foi entregue após o prazo limite da turma 1ESR (até 10/10/2025), conforme evidenciado pelo último commit em 21/10/2025, portanto não pode receber o ponto extra de prazo.
