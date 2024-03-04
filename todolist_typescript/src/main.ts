import "./style.css"

type Todo ={
    id: string
    name: string
    complete: boolean
}

const form = document.querySelector<HTMLFormElement>("#new-todo-form")! //* if we give "!" it will throw us the error if this form element it will not find on the page.
const input = document.querySelector<HTMLInputElement>("#todo-input")!
const list = document.querySelector<HTMLUListElement>("#list")!
const todo = []

form?.addEventListener("submit", e =>{
    e.preventDefault()
    const todoName = input.value
    if(todoName === "") return

    const newTodo = {
        id:crypto.randomUUID(),
        name: todoName,
        complete: false
    }

    todo.push(newTodo)
    renderNewTodo(newTodo)
    input.value = ""
})

function renderNewTodo(todo : Todo){
    const listItem = document.createElement("li")
    listItem.classList.add("list-item")

    const label = document.createElement("label")
    label.classList.add("list-item-label")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.classList.add("label-input")

    const span = document.createElement("span")
    span.classList.add("label-text")

    const button = document.createElement("button")
    button.classList.add("delete-btn")
    button.innerText = "Delete"

    label.append(checkbox, span)
    listItem.append(label,button)
    list.append(listItem)
}