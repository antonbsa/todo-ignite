import { useState } from 'react'
import { ulid } from 'ulid'

import { NewTask } from './components/NewTask'
import { TaskItem } from './components/TaskItem'

import todoLogo from './assets/logo.svg'
import clipboard from './assets/clipboard.svg'

import styles from './App.module.css'
import './global.css'

export interface Task {
  id: string;
  title: string;
  isChecked: boolean;
}

const tasksList = [
  {
    id: '1',
    title: 'Estudar React',
    isChecked: false,
  },
  {
    id: '2',
    title: 'Aplicar aporte mensal',
    isChecked: false,
  },
  {
    id: '3',
    title: 'Atualizar LinkedIn',
    isChecked: true,
  },
  {
    id: '4',
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

function orderByUnchecked(tasks: Task[]): Task[] {
  return tasks.sort((a, b) => Number(a.isChecked) - Number(b.isChecked))
}

function App() {
  const [tasks, setTasks] = useState(orderByUnchecked(tasksList))
  
  function handleCreateTask(title: string) {
    const newTask = {
      id: ulid(),
      title,
      isChecked: false,
    }
    setTasks(orderByUnchecked([...tasks, newTask]))
  }

  function deleteTask(id: string) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const completedTasks = tasks.filter(task => task.isChecked).length
  const tasksAmount = tasks.length

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
              Tarefas Criadas
              <span className={styles.counter}>
                {tasksAmount}
              </span>
            </div>
            <div className={`${styles.infoItem} ${styles.completed}`}>
              Concluídas
              <span className={styles.counter}>
                {tasksAmount === 0 ? 0 : `${completedTasks} de ${tasksAmount}`}
              </span>
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
