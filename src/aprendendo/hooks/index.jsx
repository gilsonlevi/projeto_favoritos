import React from 'react'
import { useState, useEffect } from 'react'
import styles from './hooks.module.css'

const Tela = () => {
    const [count, setCount] = useState(0)
    const [countB, setCountB] = useState(10)

    // 1 - useEffect utilização
    useEffect(() => {

        console.log("Roda a cada redenrização")
    })

    // 2 - array de dependências

    useEffect(() => {

        console.log("Só roda ao incrementar valor")
    },[count])

    // 3 - array de dep vazio

    useEffect(() => {
        console.log("Só executa uma vez")

    }, [])

    // 4 - Clearn up function

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(`O incrementador foi alterado ${count} vezes`)

        },2000)

        return () => {
            clearTimeout(timer)
        }

    }, [count])

  return (
    <div className={styles.container}>
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}> Renderizar</button>
            <p>{count}</p>
        </div>

        <div>
            <button onClick={() => setCountB(prevCount => prevCount + 1)}> Renderizar B</button>
            <p>{countB}</p>
        </div>
    </div>
  )
}

export default Tela