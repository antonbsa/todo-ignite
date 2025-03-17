import todoLogo from './assets/logo.svg'
import styles from './App.module.css'
import './global.css'

function App() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logotipo" />
    </header>
  )
}

export default App
