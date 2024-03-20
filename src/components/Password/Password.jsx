import styles from "./Password.module.css"


export default function Password(props){
    return (
        <p className={styles.password}>{props.senha}</p>
    )
}
