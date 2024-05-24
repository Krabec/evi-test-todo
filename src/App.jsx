import style from './App.module.css'
import { Header } from './components/Header/Header'
import { ContainerTask } from './components/ContainerTask/ContainerTask'
import { Button } from './components/Button/Button'

function App() {
  return (
    <>
      <Header />
      <ContainerTask />
      <Button>+ Add task</Button>
    </>
  )
}

export default App
