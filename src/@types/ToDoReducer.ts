import { ToDo } from "./ToDo";

export type ToDoState = ToDo[]

type ToDoWithOptionalProps = {
    [key in keyof ToDo]?: ToDo[key]
}

type AddToDo = {
    type: 'ADD',
    payload: ToDo | ToDo[]
}

type ChangeToDo = {
    type: 'CHANGE',
    payload: ToDoWithOptionalProps & {index: number}
}

type DeleteToDo = {
    type: 'DELETE',
    payload: {index: number}
}

export type ToDoActions = AddToDo | ChangeToDo | DeleteToDo