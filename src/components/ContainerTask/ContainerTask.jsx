import style from './ContainerTask.module.css'
import { Task } from './Task/Task'
import { useSelector } from 'react-redux'

export function ContainerTask() {
    const tasks = useSelector(state => state)
    return (
        <>
            <div className={style.container}>
                <h2 className={style.header}>Active tasks: </h2>
                <ul className={style.items}>
                {tasks.map((task) => {
                    if(task.isActive === false) {
                    return <Task task={task} key={task.id}/>
                    }
                })}
                </ul>
            </div>
            <div className={style.container}>
                <h2 className={style.header}>Completed tasks: </h2>
                <ul className={style.items}>
                {tasks.map((task) => {
                    if(task.isActive === true) {
                    return <Task task={task} key={task.id}/>
                    }
                })}
                </ul>
            </div>
        </>
    )
}