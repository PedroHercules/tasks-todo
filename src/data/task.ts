export interface TaskProps {
  id: string
  value: string
  isChecked: boolean
}

export const tasks: TaskProps[] = []

export function addTask(description: string) {
  const task = {
    id: `task-${tasks.length}`,
    value: description,
    isChecked: false
  }
  tasks.push(task)

  return task
}

export function removeTask(taskId: string) {
  const taskIndex = tasks.findIndex((task) => task.id === taskId)
  const newTasks = tasks.splice(taskIndex, 1)
  
  return newTasks
}

export function fetchTasks() {
  return tasks
}