import { renderHeader } from "../components/header"

const tasks = []

class Task {
    
    constructor(title){
        this.id = crypto.randomUUID()
        this.title = title
        this.isCompleted = false
    }

    toggleCompleted(isCompleted){

        if(isCompleted === true){
            this.isCompleted = false
        }else{
            this.isCompleted = true
        }
    }
}

function addNewTask(title){
    const newTask = new Task(title)
    tasks.push(newTask)
    renderTaskList()

}

function renderTaskList(){
    const taskList = document.querySelector("#task-list")
    taskList.innerHTML = ""
    tasks.forEach(task => {
        const listItem = document.createElement("li")
        listItem.textContent = task.title
        taskList.appendChild(listItem)
    });
}


function createElements(){
    const content = document.createElement("div")
    const container = document.createElement("div")
    const input = document.createElement("input")
    const btnAddTask = document.createElement("button")
    const taskList = document.createElement("ul")

    taskList.setAttribute("id", "task-list")
    input.setAttribute("id", "inputTask")
    btnAddTask.setAttribute("id", "btnAddTask")
    btnAddTask.setAttribute("class", "color-blue")
    content.setAttribute("class", "pageContent")
    container.setAttribute("id", "todoInputContainer")

    btnAddTask.textContent = "Add"
    

    container.appendChild(input)
    container.appendChild(btnAddTask)
    content.appendChild(container)
    content.appendChild(taskList)

    return content
}



function renderTodoPage(){
    const content = createElements()
    renderHeader("Todo App", "", "rgba(102, 159, 251, 0.3)", "rgba(102, 159, 251, 1)", )
    const app = document.querySelector("#app")
    app.innerHTML = ""
    app.appendChild(content)
    
    const taskList = document.querySelector("#task-list")
    const btnAddTask = document.querySelector("#btnAddTask")
    renderTaskList()

    btnAddTask.addEventListener("click", () => {
        const inputTask = document.querySelector("#inputTask")
        const value = inputTask.value.trim()
        addNewTask(value)
        inputTask.value = ""
    })
}

export {renderTodoPage}