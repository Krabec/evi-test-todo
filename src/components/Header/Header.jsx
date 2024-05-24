import style from './Header.module.css'

export function Header() {
    return (
        <header className={style.header}>
            <h1 className={style.namePage}>To-do list</h1>
           
        </header>
    )
}