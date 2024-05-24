import style from './Button.module.css'

export function Button({ children , onClick, taskId}) {
    return (
    <button 
        className={style.buttonAdd}
        onClick={() => {onClick(taskId)}}
    >
        {children}
    </button>
)}