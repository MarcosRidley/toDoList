class Project {
    constructor(nomeDoProjeto){
        this.project = nomeDoProjeto
    }
    get projectName() {
        return this.project
    }
}

class Task {
    constructor(title, details, dueDate, priority = "low", project = "", completed = false){
        this.title = title;
        this.details = details;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.completed = completed;
    }
    set definePriority(priority) {
        this.priority = priority
    }
    get whichProject() {
        return this.projeto
    }
}

