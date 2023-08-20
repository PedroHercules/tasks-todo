/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { PlusCircle } from '@phosphor-icons/react'

import NoteIcon from './assets/no-tasks.svg'

import styles from './app.module.css'

import "./global.css"
import { TaskCard } from "./components/TaskCard"
import { useEffect, useState } from "react"
import { tasks, addTask, TaskProps } from "./data/task"


function App() {
  const [allTasks, setAllTasks] = useState<TaskProps[]>([])
  const [countCompleted, setCountCompleted] = useState(0)
  const [taskValue, setTaskValue] = useState('')

  function handleChangeCheck(id: string) {
    const taskIndex = allTasks.findIndex((item) => item.id === id)
    tasks[taskIndex].isChecked = !allTasks[taskIndex].isChecked
    if (allTasks[taskIndex].isChecked) {
      setCountCompleted(countCompleted + 1)
    } else {
      setCountCompleted(countCompleted - 1)
    }
  }

  useEffect(() => {
    setAllTasks(tasks)
    countTasksCompletedOnPageLoad()
  }, [])

  function countTasksCompletedOnPageLoad() {
    const completedTasks = allTasks.filter((item) => item.isChecked)
    setCountCompleted(completedTasks.length)
  }

  async function handleAddTask() {
    console.log("chamou")
    const task = addTask(taskValue)
    setAllTasks([...allTasks, task])
  }
  
  return (
    <>
      <Header />
      <main>
        <div className={styles.createTaskContainer}>
          <Input 
            placeholder="Adicione uma nova tarefa"
            value={taskValue}
            onChange={(e) => setTaskValue(e.target.value)}
          />
          <button 
            className={styles.createTaskBtn}
            onClick={handleAddTask}
          >
            Criar
            <PlusCircle size={19} weight="bold"/>
          </button>
        </div>

        <div className={styles.container}>
          <div className={styles.taskInfo}>
            <p>
              tarefas criadas 
              <span>{tasks.length}</span>
            </p>
            <p>
              Concluídas
              {
                tasks.length ? (
                  <span>
                    {countCompleted} de {tasks.length}
                  </span>
                ) : (
                  <span>0</span>
                )
              }
            </p>
          </div>

          <div className={styles.tasksContainer}>
            {
              tasks.length ? (
                tasks.map((task) => (
                  <TaskCard 
                    value={task.value}
                    isChecked={task.isChecked}
                    key={task.id}
                    handleCheck={() => {
                      handleChangeCheck(task.id)
                    }} 
                  />
                ))
              ) : (
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
              )
            }
            
          </div>
        </div>
      </main>
    </>
  )
}

export default App
