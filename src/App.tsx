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
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Aplicar aporte mensal',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Atualizar LinkedIn',
    isCompleted: true,
  },
  {
    id: 4,
    title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: true,
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
  return (
    <>
      <header className={styles.header}>
        <img src={todoLogo} alt="Logotipo" />
      </header>

      <main>
        <NewTask />
        <section className={styles.tasks}>
          <div className={styles.info}>
            <div className={`${styles.infoItem} ${styles.created}`}>
              Tarefas Criadas <span className={styles.counter}>0</span>
            </div>
            <div className={`${styles.infoItem} ${styles.completed}`}>
              Concluídas <span className={styles.counter}>2 de 5</span>
            </div>
          </div>

          {tasksList.length > 0 ? (
            <div className={styles.list}>
              {tasksList.map(task => (
                <TaskItem
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  isCompleted={task.isCompleted}
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
