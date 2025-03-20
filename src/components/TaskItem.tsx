import { Trash, Check } from 'phosphor-react'
import styles from './TaskItem.module.css';

interface TaskProps {
  id: number;
  title: string;
  isCompleted: boolean;
}

export function TaskItem({ title, isCompleted }: TaskProps) {
  const checkboxStyle = `${styles.checkbox} ${isCompleted ? styles.checkboxCompleted : ''}`;
  const titleStyle = `${styles.title} ${isCompleted ? styles.titleCompleted : ''}`;
  const deleteStyle = `${styles.delete} ${isCompleted ? styles.deleteCompleted : ''}`;
  
  return (
    <div className={styles.task}>
      <button className={checkboxStyle} role="checkbox">
        {isCompleted && <Check className={styles.checkCompleted} size={24} weight='bold' />}
      </button>
      <p className={titleStyle}>
        {title}
      </p>
      <button className={deleteStyle} type="button">
        <Trash size={18} weight="bold" />
      </button>
    </div>
  )
}
