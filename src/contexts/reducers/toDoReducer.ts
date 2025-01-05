import { ToDoActions, ToDoState } from "../../@types/ToDoReducer";

export const initialState: ToDoState = [];

export const ToDoReducer = (state: ToDoState, action: ToDoActions): ToDoState =>{
    switch(action.type){
        case "ADD":
            { const { payload } = action
            return !Array.isArray(payload) ? [...state, payload] : payload }
            
        case "CHANGE": 
            { const ChangeToDo = state.map((item, key) =>{
                if(key === action.payload.index){
                    item.title = action.payload.title ?? item.title
                    item.isDone = action.payload.isDone ?? item.isDone
                }
                return item
            })    
            return ChangeToDo
            }


        case "DELETE":
            return state.filter((_item, key) => key != action.payload.index)

        default:
            return state
    }
}