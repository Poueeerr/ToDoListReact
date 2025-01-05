import { createContext, ReactNode, useReducer } from "react";
import { ToDoActions, ToDoState } from "../@types/ToDoReducer";
import { initialState, ToDoReducer } from "./reducers/toDoReducer";

type ContextType = {
    state: ToDoState,
    dispatch: React.Dispatch<ToDoActions>
}

type Props={
    children?: ReactNode
}

export const ToDoContext = createContext<ContextType>({
    state: initialState, 
    dispatch: ()=> null
})

export const ToDoContextProvider = ({children}: Props)=>{
    const [state, dispatch] = useReducer(ToDoReducer, initialState)
    return(
        <ToDoContext.Provider value={{state, dispatch}}>
            {children}
        </ToDoContext.Provider>
    )
}