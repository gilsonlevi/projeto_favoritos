import React from 'react'
import Conteudo from '../Conteudo'
import styles from './Artigo.module.css'

const Artigo = (props) => {
  return (
    <div className={styles.artigo}>
      <Conteudo img="imagens/ImgDoritos.png"/>
      <Conteudo img="imagens/imgCafe.png"/>
      <Conteudo img="imagens/imgCafe.png"/>
      <Conteudo img="imagens/imgCafe.png"/>
      <Conteudo img="imagens/imgCafe.png"/>
      <Conteudo img="imagens/imgCafe.png"/>
      <Conteudo img="imagens/imgCafe.png"/>
      <Conteudo img="imagens/imgCafe.png"/>
      <Conteudo img="imagens/imgCafe.png"/>
      <Conteudo img="imagens/imgCafe.png"/>
    </div>
  )
}

export default Artigo