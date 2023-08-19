import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { PlusCircle } from '@phosphor-icons/react'

import styles from './app.module.css'

import "./global.css"

function App() {
  
  return (
    <>
      <Header />
      <div className={styles.createTaskContainer}>
        <Input placeholder="Adicione uma nova tarefa"/>
        <button className={styles.createTaskBtn}>
          Criar
          <PlusCircle size={19} weight="bold"/>
        </button>
      </div>
      <h1>Hello world</h1>
    </>
  )
}

export default App
