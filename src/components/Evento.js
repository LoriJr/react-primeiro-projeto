import Button from "./evento/Button"

function Evento(){

    function primeiroEvento(){
        console.log("Ativando primeiro evento")
    }

    function segundoEvento(){
        console.log("Ativando Segundo evento")
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <Button evento={primeiroEvento} texto="Primeiro Evento"/>
            <Button evento={segundoEvento} texto="Primeiro Evento"/>
        </div>
    )
}

export default Evento