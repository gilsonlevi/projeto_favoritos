import React from 'react'
import Conteudo from '../Conteudo'
import styles from './Artigo.module.css'
import { useState } from 'react'

// O useState serve para gerenciar o estado de algum valor
// Getter Setter

const Artigo = (props) => {

  const [name, setName] = useState("Levi")
  const [number, setNumber] = useState(1)
  console.log(name)

  const changeNumber = () => {
    // Previous Value
    setNumber((prevNumber) => prevNumber + 1)
    setNumber((prevNumber) => prevNumber + 1)
  }
  const reiniciar = () => {
    setNumber(0)
  }

  return (
    // <div className={styles.artigo}>
    //   <Conteudo img="imagens/ImgDoritos.png"/>
    //   <Conteudo img="imagens/imgCafe.png"/>
    //   <Conteudo img="imagens/imgCafe.png"/>
    //   <Conteudo img="imagens/imgCafe.png"/>
    //   <Conteudo img="imagens/imgCafe.png"/>
    //   <Conteudo img="imagens/imgCafe.png"/>
    //   <Conteudo img="imagens/imgCafe.png"/>
    //   <Conteudo img="imagens/imgCafe.png"/>
    //   <Conteudo img="imagens/imgCafe.png"/>
    //   <Conteudo img="imagens/imgCafe.png"/>
    // </div>

    <>
      <h2>Meu nome é : {name}</h2>
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>

      <p>Número: {number}</p>
      <button onClick={changeNumber}>Mudar número</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </>
  )
}

export default Artigo