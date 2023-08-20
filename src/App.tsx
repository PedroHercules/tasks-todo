import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { PlusCircle } from '@phosphor-icons/react'

import NoteIcon from './assets/no-tasks.svg'

import styles from './app.module.css'

import "./global.css"
import { TaskCard } from "./components/TaskCard"
import { useEffect, useState } from "react"
import { tasks, addTask, TaskProps, fetchTasks, removeTask } from "./data/task"


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
    loadTasks()
    countTasksCompletedOnPageLoad()
  }, [allTasks])

  function countTasksCompletedOnPageLoad() {
    const completedTasks = tasks.filter((item) => item.isChecked)
    setCountCompleted(completedTasks.length)
  }

  function loadTasks() {
    const tasks = fetchTasks()
    setAllTasks(tasks)
  }

  function handleAddTask() {
    console.log("chamou")
    const task = addTask(taskValue)
    setAllTasks((prevTasks) => [...prevTasks, task])
  }

  function handleRemoveTask(taskId: string) {
    const tasksWithoutRemovedTask = removeTask(taskId)
    setAllTasks(tasksWithoutRemovedTask)
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
              <span>{allTasks.length}</span>
            </p>
            <p>
              Concluídas
              {
                allTasks.length ? (
                  <span>
                    {countCompleted} de {allTasks.length}
                  </span>
                ) : (
                  <span>0</span>
                )
              }
            </p>
          </div>

          <div className={styles.tasksContainer}>
            {
              allTasks.length ? (
                allTasks.map((task) => (
                  <TaskCard 
                    value={task.value}
                    isChecked={task.isChecked}
                    key={task.id}
                    handleCheck={() => {
                      handleChangeCheck(task.id)
                    }} 
                    handleRemove={() => {
                      handleRemoveTask(task.id)
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
