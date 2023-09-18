import './App.css';
import Cabecalho from './componentes/Cabecalho';
// import Conteudo from './componentes/Conteudo';
import Rodape from './componentes/Rodape';
import Artigo from './componentes/Artigo';
import Tela from './aprendendo/hooks';

function App() {
  return (
    <>
      <Cabecalho logo="imagens/header-logo.png" titulo="Supermercado Favorito"/>
      {/* <Artigo/> */}
      <Tela/>

      <Rodape logo="imagens/header-logo.png"/>
    </>
  );
}

export default App;
