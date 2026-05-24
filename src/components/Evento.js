function Evento(){

    function meuEvento(){
        alert("Fui ativado")
    }

    return(
        <div>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento