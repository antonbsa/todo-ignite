import { Trash, Check } from 'phosphor-react'
import styles from './TaskItem.module.css'
import { Task } from '../App'

interface TaskProps extends Task {
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

export function TaskItem({ id, title, isChecked, onDelete, onToggle }: TaskProps) {
  function handleToggleTask() {
    onToggle(id)
  }

  function handleDeleteTask() {
    onDelete(id)
  }

  const checkboxStyle = `${styles.checkbox} ${isChecked ? styles.checkboxCompleted : ''}`
  const titleStyle = `${styles.title} ${isChecked ? styles.titleCompleted : ''}`
  const deleteStyle = `${styles.delete} ${isChecked ? styles.deleteCompleted : ''}`

  return (
    <div className={styles.task}>
      <button className={checkboxStyle} role="checkbox" onClick={handleToggleTask} aria-checked={isChecked}>
        {isChecked && <Check className={styles.checkCompleted} size={24} weight='bold' />}
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
