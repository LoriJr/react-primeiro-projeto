import styles from './Frase.module.css'

function Frase(){

    const frase = "Este é um componente com frase"

    return(
        <div className={styles.fraseContainer}>
            <p className= {styles.fraseContent}>{frase}</p>
        </div>
    )
}

export default Frase