import Title from '../Title/Title.jsx'
import Button from '../Button/Button.jsx'
import Password from '../Password/Password.jsx'
import styles from "./PGenerator.module.css"
import { useState } from "react"

export default function PGenerator(){
    const [password, setPassword] = useState("")
    function generatePassword(){
        let newPassword = ""
        for (let i = 0; i < 10; i++){
        newPassword += Math.floor(Math.random() * 10)
        }
        setPassword(newPassword)
        setCopyText("Copiar")
        return newPassword
    }
    const [copyText, setCopyText] = useState("Copiar")
    function copy(){
        window.navigator.clipboard.writeText(password)
        setCopyText("Copiado!")
    }

    return (
    <>
        <div className={styles.bgDiv}>
            <Title title="Gerador de Senhas"/>
            <div className={styles.buttonDiv}>
                <Button innerText="Gerar!" event={generatePassword}></Button>
                <Button innerText={copyText} event={copy}></Button>
            </div>
            <Password senha={password}></Password>
        </div>    
    </>
    )
}