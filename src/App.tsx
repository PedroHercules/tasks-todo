import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { PlusCircle } from '@phosphor-icons/react'

import NoteIcon from './assets/no-tasks.svg'

import styles from './app.module.css'

import "./global.css"

function App() {
  
  return (
    <>
      <Header />
      <main>
        <div className={styles.createTaskContainer}>
          <Input placeholder="Adicione uma nova tarefa"/>
          <button className={styles.createTaskBtn}>
            Criar
            <PlusCircle size={19} weight="bold"/>
          </button>
        </div>

        <div className={styles.container}>
          <div className={styles.taskInfo}>
            <p>
              tarefas criadas 
              <span>0</span>
            </p>
            <p>
              Concluídas
              <span>0</span>
            </p>
          </div>

          <div className={styles.tasksContainer}>

            <div className={styles.noTasks}>
              <img src={NoteIcon} alt="no tasks" />
              <p>
                Você ainda não tem tarefas cadastradas
                <br />
                <span>
                Crie tarefas e organize seus itens a fazer
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
