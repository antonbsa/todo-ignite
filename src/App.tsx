import { useState } from 'react'

import { NewTask } from './components/NewTask'
import { TaskItem } from './components/TaskItem'

import todoLogo from './assets/logo.svg'
import clipboard from './assets/clipboard.svg'

import styles from './App.module.css'
import './global.css'

const tasksList = [
  {
    id: 1,
    title: 'Estudar React',
    isChecked: false,
  },
  {
    id: 2,
    title: 'Aplicar aporte mensal',
    isChecked: false,
  },
  {
    id: 3,
    title: 'Atualizar LinkedIn',
    isChecked: true,
  },
  {
    id: 4,
    title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isChecked: true,
  },
]

const EmptyList: React.FC = () => {
  return (
    <div className={styles.emptyList}>
      <img
        src={clipboard}
        alt="Ícone de prancheta"
        width={56}
      />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <br/>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}

function App() {
  const [tasks, setTasks] = useState(tasksList)

  function handleCreateTask(title: string) {
    const newTask = {
      id: tasks.length + 1,
      title,
      isChecked: false,
    }
    setTasks([...tasks, newTask])
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <>
      <header className={styles.header}>
        <img src={todoLogo} alt="Logotipo" />
      </header>

      <main>
        <NewTask onCreate={handleCreateTask} />
        <section className={styles.tasks}>
          <div className={styles.info}>
            <div className={`${styles.infoItem} ${styles.created}`}>
              Tarefas Criadas <span className={styles.counter}>0</span>
            </div>
            <div className={`${styles.infoItem} ${styles.completed}`}>
              Concluídas <span className={styles.counter}>2 de 5</span>
            </div>
          </div>

          {tasks.length > 0 ? (
            <div className={styles.list}>
              {tasks.map(task => (
                <TaskItem
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  isChecked={task.isChecked}
                  onDelete={deleteTask}
                />
              ))}
            </div>
          ) : (
            <EmptyList />
          )}
        </section>
      </main>
    </>
  )
}

export default App
