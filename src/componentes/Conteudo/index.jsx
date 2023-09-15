import React from 'react'
import styles from './Conteudo.module.css'
//Esse componente exporta uma função
//Uma função representa o conteúdo
export default function Conteudo(props) {
  return (
      <div className={styles.conteudo}>
        <article>
          <img className={styles.img} src={props.img} alt="Imagem"/>
          <p>NESCAFÉ DOLCE GUSTO Mocha 10 cápsulas
            R$ 20,90
            R$ 17,97 no Pix</p>
        </article>
      </div>
  )
}

export function OlaMundo(){
    console.log("Olá mundo")
}

