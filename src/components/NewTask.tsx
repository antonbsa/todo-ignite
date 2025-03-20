import { PlusCircle } from 'phosphor-react'
import styles from './NewTask.module.css'
import { useState } from 'react'

interface NewTaskProps {
  onCreate: (title: string) => void
}

export function NewTask({ onCreate }: NewTaskProps) {
  const [title, setTitle] = useState('')

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  function handleCreateTask(event: React.FormEvent) {
    event.preventDefault()
    onCreate(title)
    setTitle('')
  }

  return (
    <form className={styles.newTask} onSubmit={handleCreateTask}>
      <input
        type='text'
        placeholder='Adicione uma nova tarefa'
        value={title}
        onChange={handleTitleChange}
      />
      <button type='submit'>
        Criar <PlusCircle size={20} />
      </button>
    </form>
  )
}
