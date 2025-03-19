import { PlusCircle } from 'phosphor-react'
import styles from './NewTask.module.css'

export function NewTask() {
  return (
    <section className={styles.newTask}>
      <input type='text' placeholder='Adicione uma nova tarefa' />
      <button type='button'>
        Criar <PlusCircle size={20} />
      </button>
    </section>
  )
}
