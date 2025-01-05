import { useContext } from "react"
import styles from "./ToDoList.module.css"
import { ToDoContext } from "../../contexts/toDoContext"
import ClipIcon from "../../assets/clipboard.svg?react"
import { ToDoItem } from "../toDoItem"

export const ToDoList = () =>{

    const { state: todos } = useContext(ToDoContext);

    return(
        <div className={styles.container}>
            {todos.length > 0 &&
            <div className={styles.infoTasksContainer}>
                
                <span className={styles.infoDoneTasks}>Done</span>

                <div className={styles.infoCountDoneTasks}>
                    {todos.filter(item => item.isDone).length} / {todos.length}
                </div>

            </div>
            }
            {todos.length < 1 && 
                <div className={styles.emptyContainer}>
                    <ClipIcon/>

                    <p className={styles.emptyLabel}>
                        <strong>
                            No tasks
                        </strong>
                        <br />
                        Create new tasks
                    </p>
                </div>
            }

            <div className={styles.tasksContainer}>
                {todos.map((data, key) =>(
                    <ToDoItem key={key} data={data} dataIndex={key}></ToDoItem>
                ))}
            </div>
        </div>
    )
}