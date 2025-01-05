
import { useSaveToDos } from './hooks/useSaveToDo'
import styles from "./App.module.css"
import { Header } from './components/header'
import { ToDoList } from './components/toDoList'


function App() {
  
  useSaveToDos()
  return (
    <div className={styles.container}>
        <header>
            <Header></Header>
        </header>

        <main>
          <ToDoList></ToDoList>
        </main>
    </div>
  )
}

export default App
