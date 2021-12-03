import './UseState.css'
import React, { useContext, useState } from "react"
// propriedade juntar nomes
import { AppContexto } from '../../data/Store'


const UseState = props => {

    const {contextoNome, setContextoNome} = useContext(AppContexto)

    const [ nome, setNome ] = useState("")
    const [ sobrenome, setSobrenome ] = useState("")
    const [ mensagem, setMensagem ] = useState("")

    function alterarNomeContexto(nome){
        setContextoNome(nome)
    }

    return (
        <div>
            <div className="titulo">
                <h1>Propriedades</h1>
                <h2>Uma propriedade que junta seu nome</h2>
            </div>

            <div className="conteudo">
                <input
                    className="campo"
                    type="text" value={nome}
                    placeholder="Digite seu nome"
                    onChange={ e => setNome(e.target.value) }
                />
                <input 
                    className="campo"
                    type="text"
                    value={sobrenome}
                    placeholder="Digite seu sobrenome"
                    onChange={ e => setSobrenome(e.target.value) }
                />

                <button
                    className="botao"
                    onClick={ () => setMensagem(`Olá ${nome} ${sobrenome}, seja bem-vindo!`) }
                >Ok</button>

                <p className="mensagem">{mensagem}</p>

                <button 
                    className="botao"
                    onClick={ () => alterarNomeContexto(nome) }
                >É assim que funciona</button>
            </div>
        </div>
    )
}
export default UseState