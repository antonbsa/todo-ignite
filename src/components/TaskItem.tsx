import styles from './TaskItem.module.css';

interface TaskProps {
  id: number;
  title: string;
  isCompleted: boolean;
}

export function TaskItem({ title }: TaskProps) {
  return (
    <div className={styles.task}>
      <button className={styles.checkbox} role="checkbox" />
      <p className={styles.title}>
        {title}
      </p>
      <button className={styles.delete} type="button">
        Remover
      </button>
    </div>
  )
}
