import styles from "./Title.module.css"

export default function Title(props){
    return (
    <p className={styles.title}>{props.title}</p>
    )
}

