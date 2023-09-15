import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Conteudo from './componentes/Conteudo';
import Rodape from './componentes/Rodape';

function App() {
  return (
    <>
      <Cabecalho logo="imagens/header-logo.png" titulo="Supermercado Favorito"/>
      <Conteudo img="imagens/imgCafe.png"/>
      <Rodape logo="imagens/header-logo.png"/>
    </>
  );
}

export default App;
