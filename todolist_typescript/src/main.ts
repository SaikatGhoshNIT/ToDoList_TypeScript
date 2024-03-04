import "./style.css"

const form = document.querySelector<HTMLFormElement>("#new-todo-form")! //* if we give "!" it will throw us the error if this form element it will not find on the page.
const input = document.querySelector<HTMLInputElement>("#todo-input")!

const todo = []

form?.addEventListener("submit", e =>{
    const todoName = input.value
    if(todoName === "") return

    const newTodo = {
        id:crypto.randomUUID(),
        name: todoName,
        complete: false
    }

    todo.push(newTodo)
    input.value = ""
})

function renderNewTodo(todo){

}