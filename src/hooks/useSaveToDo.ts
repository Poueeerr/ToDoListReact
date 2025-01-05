import { useContext, useEffect, useState } from "react"
import { ToDoContext } from "../contexts/toDoContext"
import { AES, enc } from "crypto-js"
import { ToDo } from "../@types/ToDo"

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY as string
const LOCAL_STORAGE_KEY = 'DATA'

export const useSaveToDos = () =>{

    const [gottenInitialData, setGottenInitialData] = useState(false)

    const {state, dispatch} = useContext(ToDoContext)

    const handleToDoChanges = () =>{
        
        if(!gottenInitialData) return;

        const value = AES.encrypt(JSON.stringify(state), SECRET_KEY)
    
        localStorage.setItem(LOCAL_STORAGE_KEY, value.toString())
    }

    //Getting ToDo initial
    useEffect(()=>{
        try{
            const ToDoData = localStorage.getItem(LOCAL_STORAGE_KEY);
            
            if(ToDoData){
                const bytes = AES.decrypt(ToDoData, SECRET_KEY)
                const decryptedData: ToDo[] = JSON.parse(bytes.toString(enc.Utf8))

                dispatch({type: 'ADD', payload: decryptedData})
            }
        }
        catch{
            alert('Could not retrieve data')
        }
        setGottenInitialData(true);
    }, [])

    //Monitoring all state changes
    useEffect(()=>{
        handleToDoChanges()
    }, [state])
}