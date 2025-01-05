import { ChangeEvent, useContext } from 'react'
import { ToDo } from '../../@types/ToDo'
import styles from './ToDoItem.module.css'
import { ToDoContext } from '../../contexts/toDoContext'
import TrashIcon from "../../assets/trash.svg?react"

type Props={
    data: ToDo,
    dataIndex: number
}

export const ToDoItem = ({data, dataIndex}: Props) =>{
    
    const {dispatch} = useContext(ToDoContext)

    const handleDeleteToDo = () =>{
        dispatch({type: 'DELETE', payload: {index: dataIndex}})
    }

    const handleToggleIsDoneToDo = (ev: ChangeEvent<HTMLInputElement>) =>{
        dispatch({type: 'CHANGE', payload: {index: dataIndex, isDone: ev.target.checked } } )
    }

    return(
        <div className={styles.container}>
            <div className={styles.isDoneContainer}>
                <input type="checkbox" 
                className={styles.isDoneInput}
                checked={data.isDone}
                onChange={handleToggleIsDoneToDo}
                />
            </div>
            <div className={`${styles.taskTitleContainer} ${data.isDone ? styles.taskDoneTitleContainer : ''}`}>
                {data.title}
            </div>
            <div className={styles.deleteTaskContainer}>
                <button className={styles.deleteTaskBtn} onClick={handleDeleteToDo}>
                    <TrashIcon></TrashIcon>
                </button>
            </div>
        </div>
    )
}