function Pessoa({foto, nome, idade}){

    return(
        <div>
            <img src={foto} alt={nome} height="150" width="150"/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
        </div>
    )
}

export default Pessoa