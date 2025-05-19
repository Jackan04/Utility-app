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
    const taskList = document.querySelector("#task-list")
    
    
    tasks.forEach(task => {
        const listItem = document.createElement("li")
        listItem.textContent = task.title
        taskList.appendChild(listItem)
    });

    app.appendChild(content)
}

export {renderTodoPage}