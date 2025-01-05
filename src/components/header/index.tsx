import { useContext, useState } from "react"
import { ToDoContext } from "../../contexts/toDoContext"
import styles from "./Header.module.css"
import { Input } from "../input"
import { Button } from "../button"



export const Header = () =>{
    const [inputValue, setInputValue] = useState("")

    const {dispatch} = useContext(ToDoContext)

    const handleNewTask = ()=>{
        if(!inputValue){
            alert("Please write a task")
            return;
        }
        dispatch({type: "ADD", payload:{title: inputValue, isDone: false }})
        setInputValue('')
    }
    return(
        <div className={styles.container}>
            <div className={styles.newTasksContainer}>
                <div className={styles.newTasksInput}>
                    <Input
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                    />
                </div>
                <Button
                    onClick={handleNewTask}
                />
            </div>

        </div>
    )
}