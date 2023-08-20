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