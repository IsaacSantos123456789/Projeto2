import './UseEffect.css'
import React, { useState, useEffect } from "react"
// dependendo do numero que mostra ele envia uma mensagem
const UseEffect = props => {

    const [ notaFinal, setNotaFinal ] = useState(0)
    const [ situacao, setSituacao ] = useState("")

    useEffect ( () => {
        console.log('useEffect: executa a cada Re-Renderização. \n \n')
    })

    useEffect( () => {
        console.log('useEffect condicional ao componente:')
        console.log('Executa somente na montagem do componente.\n\n')
    }, [])

    useEffect( () => {
        setSituacao( verificaSituacao(notaFinal) )
    }, [notaFinal] )

    useEffect( () => {
        console.log('useEffect condicional:')
        console.log('Nesse caso, executa quando o state situacao for alterado. \n\n')
    }, [situacao] )

    useEffect( () => {
        console.log('useEffect condicional (com limpeza):')
        console.log('Executa enquanto um componente existir. \n\n')

        return () => {
            console.log('useEffect condicional (com limpeza):')
            console.log('Executa o return quando o componente for desmontado. \n\n')  
        } 
    }, [])

    console.log('\nO componente foi renderizado. \n\n')

    function verificaSituacao(nota) {
        return nota >= 6 ? "Número maior que 6" : "Número menor que 6"
    }

    return (
        <div>
            <div className="titulo">
                <h1>De 0 a 10</h1>
                <h2>Dependendo do número a mensagem muda</h2>
            </div>

            <div className="conteudo">

                <label className="campo"></label>
                <input
                    className="campo"
                    type="number"
                    min={0}
                    max={10}
                    value={notaFinal}
                    onChange={ e => setNotaFinal(e.target.value) }
                />

                <label className="campo"></label>
                <p className="mensagem"id={situacao}>{situacao}</p>
            </div>
        </div>
    )
}
export default UseEffect