import { Trash, Check } from 'phosphor-react'
import styles from './TaskItem.module.css'
import { useState } from 'react'
import { Task } from '../App'

interface TaskProps extends Task {
  onDelete: (id: string) => void;
}

export function TaskItem({ id, title, isChecked, onDelete }: TaskProps) {
  const [isCompleted, setIsCompleted] = useState(isChecked)

  function handleToggleTask() {
    setIsCompleted(!isCompleted)
  }

  function handleDeleteTask() {
    onDelete(id)
  }

  const checkboxStyle = `${styles.checkbox} ${isCompleted ? styles.checkboxCompleted : ''}`
  const titleStyle = `${styles.title} ${isCompleted ? styles.titleCompleted : ''}`
  const deleteStyle = `${styles.delete} ${isCompleted ? styles.deleteCompleted : ''}`
  
  return (
    <div className={styles.task}>
      <button className={checkboxStyle} role="checkbox" onClick={handleToggleTask} aria-checked={isCompleted}>
        {isCompleted && <Check className={styles.checkCompleted} size={24} weight='bold' />}
      </button>
      <p className={titleStyle}>
        {title}
      </p>
      <button className={deleteStyle} type="button" onClick={handleDeleteTask}>
        <Trash size={18} weight="bold" />
      </button>
    </div>
  )
}
