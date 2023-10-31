let inputToDo = document.querySelector(".inputText");
let deleteInput = document.querySelector(".deleteInput");
let add = document.querySelector(".add");
let callTextarea = document.querySelector(".callTextarea");
let inputArea = document.querySelector(".inputArea");
let toDoList = document.querySelector(".toDoList");
let sortBtn = document.querySelector(".sort")
let sortBool = true;
let sortBtnFisrtClick = true;
let sortHoverBoll = true;
class List{
    constructor(todo){
        this.tdList = []
        this.newToDoId = this.tdList.length
    }
    addToList(){
        let todo = document.createElement("div")
        todo.classList = "toDoListItem"
        let toDoText = document.createElement("p")
        toDoText.classList = "toDoText"
        let deleteToDo = document.createElement("img")
        deleteToDo.classList = "deleteToDo"
        deleteToDo.alt = this.newToDoId
        deleteToDo.src = "./img/x_button_normal.svg"
        toDoText.innerText = inputToDo.value;
        todo.append(toDoText);
        todo.append(deleteToDo);
        this.tdList.push([this.newToDoId,todo])
        this.newToDoId++
        this.pushList();
    }
    pushList(){
        let newToDoList = document.createElement("div");
        newToDoList.classList = ".toDoList"
        for(let i = 0; i < this.tdList.length;i++){
            newToDoList.append(this.tdList[i][1])
        }
        toDoList.innerHTML = newToDoList.innerHTML
        this.addEvent()
    }
    deletetd(tdId){
        for(let i = 0; i<this.tdList.length; i++){
            if(this.tdList[i][0] == tdId){
                this.tdList.splice(i,1);
            }
        }
        if(this.tdList.length == 0){
            toDoList.style.display = "none";
            inputArea.style.display = "flex";
        }
        this.pushList();
    }
    addEvent(){
        let deletBtns = document.querySelectorAll(".deleteToDo")
        deletBtns.forEach(deleteBtn =>{
            deleteBtn.addEventListener("mouseenter", () => {
                deleteBtn.src = "./img/x_button_hover.svg"
            })
            deleteBtn.addEventListener("mouseleave", () => {
                deleteBtn.src = "./img/x_button_normal.svg"
            })
            deleteBtn.addEventListener("click", (e) => {
                tdList.deletetd(e.target.alt)
            })
        })
    }
    sortList(){
        this.tdList.sort((a,b) => {
            if(sortBool){
                if(a[1].firstChild.innerText < b[1].firstChild.innerText){
                    return -1
                }
                else{
                    return 1
                }
            }
            else{
                if(a[1].firstChild.innerText > b[1].firstChild.innerText){
                    return -1
                }
                else{
                    return 1
                }
            }
        })
        this.pushList();
    }
}
let tdList = new List;
deleteInput.addEventListener("click", () => {
    inputToDo.value = "";
})
deleteInput.addEventListener("mouseenter", () => {
    deleteInput.src = "./img/x_button_hover.svg";
})
deleteInput.addEventListener("mouseleave", () => {
    deleteInput.src = "./img/x_button_normal.svg";
})
add.addEventListener("click", (e) => {
    if(((inputToDo.value).replace(/[" "]/ig,"")).length != 0){
        tdList.addToList();
        inputToDo.value = "";
        inputArea.style.display = "none";
        toDoList.style.display = "block";
    }
    e.preventDefault();
})
callTextarea.addEventListener("click", (e) => {
    inputArea.style.display = "flex";
    e.preventDefault();
})
sortBtn.addEventListener("mouseenter", () => {
    if(sortBool){
        sortBtn.src = "./img/sort_a_z_hover.svg"
    }
    else{
        sortBtn.src = "./img/sort_z_a_hover.svg"
    }
})
sortBtn.addEventListener("mouseleave", () => {
    if(sortBool){
        sortBtn.src = "./img/sort_a_z_normal.svg"
    }
    else{
        sortBtn.src = "./img/sort_z_a_normal.svg"
    }
})
sortBtn.addEventListener("click", () => {
    if(sortBtnFisrtClick){
        sortBtnFisrtClick = false;
    }
    else{
        if(sortHoverBoll){
            if(!sortBool){
                sortBtn.src = "./img/sort_a_z_hover.svg"
            }
            else{
                sortBtn.src = "./img/sort_z_a_hover.svg"
            }
        }
        else{
            if(sortBool){
                sortBtn.src = "./img/sort_a_z_normal.svg"
            }
            else{
                sortBtn.src = "./img/sort_z_a_normal.svg"
            }
        }
        sortBool = !sortBool;
    }
    tdList.sortList();
})