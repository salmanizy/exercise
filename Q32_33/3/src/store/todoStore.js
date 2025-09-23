import {atom} from "recoil"
export const todoListStore = atom({ 
    key: "todoList", 
    default:[ 
        { 
            id:1, 
            title: "Belajar React", 
            counter: 0 
        }, 
        { 
            id:2, 
            title: "Belajar Angular", 
            counter: 0 
        }, 
        { 
            id:3, 
            title: "Belajar Remix", 
            counter: 0 
        }, 
    ] 
})