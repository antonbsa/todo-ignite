import todoLogo from './assets/logo.svg'
import styles from './App.module.css'
import './global.css'
import { Task } from './components/Task'

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
]

function App() {
  return (
    <>
      <header className={styles.header}>
        <img src={todoLogo} alt="Logotipo" />
      </header>

      <main>
        <section className="newTask">
          <input type="text" placeholder="Adicionar nova tarefa" />
          <button type="button">Adicionar</button>
        </section>

        <section className="tasksList">
          <div className="info">
            <div className="created">
              Taregas Criadas <span>5</span>
            </div>
            <div className="created">
              Taregas Concluídas <span>5 de 5</span>
            </div>
          </div>

          <div className="list">
            {tasksList.map(task => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                isCompleted={task.isCompleted}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
