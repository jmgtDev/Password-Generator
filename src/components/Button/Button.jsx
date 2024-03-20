import styles from "./Button.module.css"


export default function Button(props){

    return (
    <a onClick={props.event} className={styles.button}>
        {props.innerText}
    </a>
    )
}