import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'
import { useGetProdutosQuery } from './services/api'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const { isLoading } = useGetProdutosQuery()
  const [favoritos, setFavoritos] = useState<Produto[]>([])

  function favoritar(produto: Produto) {
    if (favoritos.find((p) => p.id === produto.id)) {
      const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
      setFavoritos(favoritosSemProduto)
    } else {
      setFavoritos([...favoritos, produto])
    }
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} />
        <Produtos favoritos={favoritos} favoritar={favoritar} />
      </div>
    </Provider>
  )
}

export default App
