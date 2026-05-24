import Item from "./Item"

function List(){

    return(
        <>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>                
                <Item marca="Maserati" ano_lancamento={1950}/>                
                <Item marca="Bugati" ano_lancamento={1964}/>
            </ul>
        </>
    )
}

export default List