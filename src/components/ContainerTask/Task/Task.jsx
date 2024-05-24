import { useDispatch } from 'react-redux'
import { Button } from '../../Button/Button'
import style from './Task.module.css'

export function Task({task}) {
    const dispatch = useDispatch()

    const deliteTask = (id) => {
        console.log('click' + id)
        dispatch({type: 'DELITE_TASK', id: id})
    }

    return (
        <li className={style.elem} key={task.id}>
            <input type='checkbox' className={style.checkbox} checked={task.isActive}/>
            <h3 className={style.titleTask}>{task.title}</h3>
            <p className={style.dataTask}>{task.data}</p>
            <Button onClick={deliteTask} key={task.id} taskId={task.id}>
                <img src='/delete-svgrepo-com.svg' width='35px'alt='Delete task'/>
            </Button>
        </li>
    )
}