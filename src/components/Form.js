import { useState } from "react"

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
       console.log(`Usuário ${name} foi cadastrado com a senha ${password}`) 
       
       console.log("cadastrado realizado")
    }

    const[name, setName] = useState()
    const[password, setPassword] = useState()

    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name" id="name" />
                    <input type="text" placeholder="Digite seu nome" 
                    onChange={(e) => setName(e.target.value)}
                    />
                    
                </div>
                <div>
                    <label htmlFor="password" id="password" />
                    <input type="password" placeholder="Digite sua senha"
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form