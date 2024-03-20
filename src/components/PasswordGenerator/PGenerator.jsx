import Title from '../Title/Title.jsx'
import Button from '../Button/Button.jsx'
import Password from '../Password/Password.jsx'
import styles from "./PGenerator.module.css"
import { useState } from "react"

export default function PGenerator(){
    const [senhaVeia, setSenha] = useState("")
    function generatePassword(){
        let password = ""
        for (let i = 0; i < 10; i++){
        password += Math.floor(Math.random() * 10)
        }
        setSenha(password)
        setCopiado("Copiar")
        console.log(password)
        return password
    }
    const [copiar, setCopiado] = useState("Copiar")
    function copy(){
        window.navigator.clipboard.writeText(senhaVeia)
        setCopiado("Copiado!")
    }

    return (
    <>
        <div className={styles.bgDiv}>
            <Title title="Gerador de Senhas"/>
            <div className={styles.buttonDiv}>
                <Button innerText="Gerar!" event={generatePassword}></Button>
                <Button innerText={copiar} event={copy}></Button>
            </div>
            <Password senha={senhaVeia}></Password>
        </div>    
    </>
    )
}