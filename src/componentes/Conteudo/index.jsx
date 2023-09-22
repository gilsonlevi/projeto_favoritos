import React from 'react'
import styles from './Conteudo.module.css'
import { useState } from 'react'
//Esse componente exporta uma função
//Uma função representa o conteúdo
export default function Conteudo(props) {
  const [nomeSite, setNomeSite]=useState('Nome do Site')
  const [url, setUrl]=useState('URL')
  
  let favoritos=[]

  function salvarFavorito(){
    console.log('favoritos>>>:', favoritos)
    console.loh('estados>>>:', {nomeSite, url})
    favoritos =[...favoritos, {nomeSite, url}]
    console.log('favoritos 2>>>:', favoritos)
    localStorage.setItem("Favorito", JSON.stringify({nomeSite, url}))
  }


  return (
      <div className={styles.area}>
        Conteudo
        <form className={styles.formulario}>
          <label>Nome do site</label>
          <h1>{nomeSite}</h1>
          <input 
            name='nomeSite' 
            onChange={(evento)=>{
              setNomeSite(evento.target.value); 
              console.log(nomeSite)
            }}
          ></input>
          <br/>
          <label>URL</label><br/>
          <h1>{url}</h1>
          <input 
          type='url' 
          name='url' 
          onChange={(evento)=>{
            setUrl(evento.target.value);
            console.log(url)

          }}></input><br/>
          <button onClick={()=>salvarFavorito()}>Salvar</button>
        </form>

      </div>
  )
}

export function OlaMundo(){
    console.log("Olá mundo")
}

